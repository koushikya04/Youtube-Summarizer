from flask import Flask, request, jsonify
from flask_cors import CORS
from summarizer import summarize_youtube_video

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()
    url = data.get("url", "")
    summary = summarize_youtube_video(url)
    return jsonify({"summary": summary})

if __name__ == "__main__":
    app.run(debug=True)
