from flask import Blueprint, send_from_directory, current_app

views = Blueprint("views", __name__)

@views.route('/')
@views.route('/login')
@views.route('/register')
@views.route('/game')
@views.route('/gamedifficulty')
@views.route('/scoreboard')
def index():
    return send_from_directory(current_app.static_folder, 'index.html')

@views.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('images', filename)
