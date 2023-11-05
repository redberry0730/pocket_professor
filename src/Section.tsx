import React, { useState } from 'react';

const Section: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [question, setQuestion] = useState('');
  const [yourAnswer, setYourAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.files ? event.target.files[0] : null);
  };

  const handleGenerateFeedback = () => {
    // Here you can add your API keys, hardcoded prompt parts and call to ChatGPT
    setFeedback('Generated feedback...');
  };

  return (
    <div className="bg-green-100 p-4">
      <div className="mb-4">
        <input type="file" accept=".png, .jpg" onChange={handleImageUpload} />
      </div>
      <div className="bg-white rounded p-4 mb-4">
        <div className="mb-2">
          <label>Question</label>
          <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="w-full p-2 mt-1 border rounded" />
        </div>
        <div className="mb-2">
          <label>Your Answer</label>
          <textarea value={yourAnswer} onChange={(e) => setYourAnswer(e.target.value)} className="w-full p-2 mt-1 border rounded" />
        </div>
        <div className="mb-2">
          <label>Correct Answer</label>
          <textarea value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} className="w-full p-2 mt-1 border rounded" />
        </div>
      </div>
      <button onClick={handleGenerateFeedback} className="bg-blue-500 text-white rounded p-2 mb-4">Generate Feedback</button>
      <div className="bg-white rounded p-4">
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default Section;