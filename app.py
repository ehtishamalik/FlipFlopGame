from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return send_from_directory('static', 'dist/index.html')

@app.route('/abc')
def abc():
    return '<h1>Hello From H1</h1>'

if __name__ == '__main__':
    app.run(debug=True)
