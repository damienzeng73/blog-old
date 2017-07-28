from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'damien'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/damien'

mongo = PyMongo(app)

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


if __name__ == '__main__':
    app.run(debug=True)
