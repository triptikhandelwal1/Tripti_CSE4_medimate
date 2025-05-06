
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import threading
import time

app = Flask(__name__)
CORS(app)

reminders = []

def check_reminders():
    while True:
        now = datetime.now().strftime("%H:%M")
        for r in reminders:
            if r['time'] == now:
                print(f"Reminder: {r['message']}")  # Replace with real push notification system
        time.sleep(60)

@app.route('/add_reminder', methods=['POST'])
def add_reminder():
    data = request.json
    reminders.append({'time': data['time'], 'message': data['message']})
    return jsonify({"status": "Reminder added"}), 200

@app.route('/ping', methods=['GET'])
def ping():
    return "Server is running"

if __name__ == '__main__':
    thread = threading.Thread(target=check_reminders)
    thread.daemon = True
    thread.start()
    app.run(debug=False, port=5001)
