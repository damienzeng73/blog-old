import logging
logging.basicConfig(level=logging.DEBUG)

from flask import Flask, render_template, jsonify, request
from flask_pymongo import PyMongo
from flask_mail import Mail, Message

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'damien'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/damien'

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'damnee562@gmail.com'
app.config['MAIL_PASSWORD'] = 'You can not see this'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mongo = PyMongo(app)
mail = Mail(app)

@app.route('/', methods=['GET'], defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')

@app.route('/api/projects', methods=['GET'])
def getProjects():
    projects = []
    for project in mongo.db.projects.find():
        projects.append({
            'name': project['name'],
            'tags': project['tags'],
            'description': project['description'],
            'url': project['url']
        })

    response = {}
    response['projects'] = projects
    return jsonify(response)

@app.route('/api/sendEmail', methods=['POST'])
def sendEmail():
    name = request.json['name']
    email = request.json['email']
    message = request.json['message']

    msg = Message('[Flask-mail] Sent from {}'.format(email), sender=email, recipients=['damnee562@gmail.com'])
    msg.body = message
    mail.send(msg)

    return ('', 204)


if __name__ == '__main__':
    app.run(debug=True)
