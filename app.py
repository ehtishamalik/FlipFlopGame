from flask import Flask, send_from_directory, session
import datetime

app = Flask(__name__)

app.config["SECRET_KEY"] = "EHTISHAM"
app.permanent_session_lifetime = datetime.timedelta(seconds=5)

@app.route('/')
def index():
    return send_from_directory('static', 'dist/index.html')

@app.route('/abc')
def abc():
    return '<h1>Hello From H1</h1>'

# Sessions in flask
@app.route('/spark-counter/')
def spark():
    if 'spark' in session:
        session['spark'] = session.get('spark') + 1  # reading and updating session data
    else:
        session['spark'] = 1 # setting session data
    return "Total visits: {}".format(session.get('spark'))

@app.route('/delete-spark/')
def delete_spark():
    session.pop('spark', None) # delete spark
    return 'spark deleted'

@app.route('/items/')
def items():
    res = str(session.items())
    return res

if __name__ == '__main__':
    app.run(debug=True)
