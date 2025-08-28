YouTube Summarization
This project allows users to paste a YouTube video URL and receive a summarized version of its transcript. It includes a Flask backend for fetching and summarizing the transcript and a React frontend for the user interface.

Folder Structure
YouTube_Summarization/
├── backend/
│   ├── app.py
│   ├── summarizer.py
│   └── requirements.txt
└── frontend/
    └── src/
        ├── App.jsx
        ├── main.jsx
        └── components/
            └── YouTubeSummarizer.jsx
How to Run
1. Backend (Flask API)
Navigate to the backend folder and set up a virtual environment:

cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
Install the dependencies:

pip install -r requirements.txt
Start the Flask server:

python app.py
It should run on: http://localhost:5000

2. Frontend (React)
Open a new terminal, then navigate to the frontend folder:

cd frontend
npm install
npm run dev
Open the browser at: http://localhost:5173

How It Works
User pastes a YouTube video URL.
React frontend sends the URL to the Flask backend.
Flask uses youtube-transcript-api to fetch the transcript.
It summarizes the transcript using a HuggingFace transformer (bart-large-cnn).
The summary is displayed in the UI.
Requirements
Node.js & npm (for frontend)
Python 3.8+ (for backend)
pip
Technologies Used
React (frontend)
Flask (backend)
Hugging Face Transformers
YouTube Transcript API
Author
