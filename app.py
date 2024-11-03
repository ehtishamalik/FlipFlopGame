from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv
import os
from server.views import views
from server.api import Login, Signup, Scoreboard


def create_app():
    # Load .env file
    if os.getenv("FLASK_ENV") == "production":
        load_dotenv(".env.production")
    else:
        load_dotenv(".env")

    app = Flask(__name__, static_folder='dist', static_url_path='/')
    api = Api(app)

    app.config["DEBUG"] = os.getenv("DEBUG", "False")
    app.config["DATABASE_URL"] = os.getenv("DATABASE_URL")
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

    app.register_blueprint(views, url_prefix="/")

    api.add_resource(Login, "/api/auth/login")
    api.add_resource(Signup, "/api/auth/signup")
    api.add_resource(Scoreboard, "/api/scoreboard/<string:difficulty>")

    return app


if __name__ == '__main__':
    app = create_app()
    app.run()
