from flask import Flask, request
from flask import render_template, jsonify, request
import json

app = Flask(__name__,static_url_path='',
            static_folder='static',
            template_folder='template')

data_file_dict = {
    "people": "data/people.json",
    "projects": "data/projects.json",
    "publications": "data/publications.json",
    "videosdemos": "data/videosdemos.json",
    "contact": "data/contact.json"
}

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/people')
def people():
    return render_template('people.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/publications')
def publications():
    return render_template('publications.html')

@app.route('/videosdemos')
def videosdemos():
    return render_template('videosdemos.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/data', methods=['POST'])
def get_data():
    req_data = request.get_json(force=True)
    data_type = req_data["type"]
    print(data_type)
    file_path = data_file_dict[data_type]
    print(file_path)
    with open(file_path) as json_file:
        data = json.load(json_file)
    print(data[data_type])
    return json.dumps(data[data_type])
        

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')