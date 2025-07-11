from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

@app.route('/api/message')
def get_message():
    return jsonify(message="Hello from Flask!")

@app.route('/api/format', methods=['POST'])
def get_format():
    if request.is_json:
        data = request.get_json()
        # Process the received JSON data
        formatted = f"*_{data.get('text')}_*"
        return jsonify({"status": "success", "formatted": formatted}), 200
    else:
        # Handle form data if sent as 'application/x-www-form-urlencoded' or 'multipart/form-data'
        data = request.form
        formatted = f"*_{data.get('text')}_*"
        return jsonify({"status": "success", "formatted": formatted}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)