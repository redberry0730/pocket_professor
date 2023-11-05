
import React, { useState } from 'react';

const AnswerBoxes: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  return (
    <div id="answerBoxes" className="rounded-box">
      <div>
        <label>Question:</label>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div>
        <label>Your Answer:</label>
        <textarea value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
      </div>
      <div>
        <label>Correct Answer:</label>
        <textarea value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} />
      </div>
    </div>
  );
};

export default AnswerBoxes;