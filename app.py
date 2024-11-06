from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv
import os
from server.views import views
from server.api import Login, Signup, Scoreboard
from server.helpers import create_response_error
from flask_jwt_extended import JWTManager


def create_app():
    app = Flask(__name__, static_folder='dist', static_url_path='/')

    # Load .env file
    load_dotenv(".env")

    app.config["DEBUG"] = os.getenv("DEBUG", False)
    app.config["DATABASE_URL"] = os.getenv("DATABASE_URL")
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

    api = Api(app)
    jwt = JWTManager(app)

    @jwt.unauthorized_loader
    def custom_unauthorized_response(err):
        return create_response_error("Could not save your score, please log in.", str(err)), 401

    # Custom response for invalid or malformed JWT
    @jwt.invalid_token_loader
    def custom_invalid_token_response(err):
        return create_response_error("Could not save your score, please log in.", str(err)), 422

    app.register_blueprint(views, url_prefix="/")

    api.add_resource(Login, "/api/auth/login")
    api.add_resource(Signup, "/api/auth/signup")
    api.add_resource(Scoreboard, "/api/scoreboard/<string:difficulty>")

    return app


if __name__ == '__main__':
    app = create_app()
    app.run()
