📺 YouTube Summarization

This project allows users to paste a YouTube video URL and receive a concise AI-generated summary of its transcript.
It features a Flask backend for fetching and summarizing transcripts and a React frontend for a user-friendly interface.

📂 Folder Structure
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

⚙️ How to Run
1️⃣ Backend (Flask API)

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


The backend will run on http://localhost:5000

2️⃣ Frontend (React)

In a new terminal, navigate to the frontend folder:

cd frontend
npm install
npm run dev


The frontend will run on http://localhost:5173

🚀 How It Works

User pastes a YouTube video URL.

React frontend sends the URL to the Flask backend.

Flask uses YouTube Transcript API to fetch the transcript.

The transcript is summarized using a Hugging Face Transformer (BART-large-cnn).

The summary is displayed in the UI.

📋 Requirements

Node.js & npm (for frontend)

Python 3.8+ (for backend)

pip

🛠️ Technologies Used

Frontend: React

Backend: Flask

NLP Model: Hugging Face Transformers (BART-large-cnn)

Transcript Fetching: YouTube Transcript API
