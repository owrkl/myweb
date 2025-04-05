from flask import *
from flask_cors import *

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message":"Hello from Flask!"})

@app.route('/api/data' , methods = ['GET'])
def get_data():
    return jsonify({"data":"GET OUT"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)