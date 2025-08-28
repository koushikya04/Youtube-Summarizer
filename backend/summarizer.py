from youtube_transcript_api import YouTubeTranscriptApi

def get_video_id(url):
    if "watch?v=" in url:
        return url.split("watch?v=")[-1].split("&")[0]
    elif "youtu.be/" in url:
        return url.split("youtu.be/")[-1].split("?")[0]
    return url

def summarize_youtube_video(url):
    try:
        video_id = get_video_id(url)
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        transcript_text = " ".join(line['text'] for line in transcript)

        # Fake summary logic — replace with real LLM API later
        return f"This is a summary of the video at: {url}"
    except Exception as e:
        return f"Failed to summarize video: {str(e)}"
