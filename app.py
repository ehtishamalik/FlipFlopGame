from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def hello():
    return send_from_directory('static', 'dist/index.html')

if __name__ == '__main__':
    app.run(debug=True)
