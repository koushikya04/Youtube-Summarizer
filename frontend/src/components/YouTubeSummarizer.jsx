import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";

const YouTubeSummarizer = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setSummary("");
    try {
      const response = await axios.post("http://localhost:5000/summarize", { url });
      setSummary(response.data.summary);
    } catch (error) {
      setSummary("Failed to generate summary.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">YouTube Video Summarizer</h1>
      <div className="flex items-center gap-2 mb-4">
        <Input
          type="text"
          placeholder="Enter YouTube video URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button onClick={handleSummarize} disabled={loading || !url}>
          {loading ? "Summarizing..." : "Summarize"}
        </Button>
      </div>
      {summary && (
        <Card className="bg-gray-100 border border-gray-300">
          <CardContent className="p-4">
            <p className="text-gray-800 whitespace-pre-wrap">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default YouTubeSummarizer;
