from flask import Flask, send_from_directory, session
import os

app = Flask(__name__, static_folder='dist', static_url_path='/')

app.config["SECRET_KEY"] = os.urandom(24).hex()

@app.route('/')
@app.route('/login')
@app.route('/register')
@app.route('/game')
@app.route('/gamedifficulty')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('images', filename)

if __name__ == '__main__':
    app.run()
