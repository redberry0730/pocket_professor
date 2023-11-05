import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GenFeedback: React.FC<{
  question: string;
  userAnswer: string;
  correctAnswer: string;
}> = ({ question, userAnswer, correctAnswer }) => {
  const [feedback, setFeedback] = useState('');

  const fetchFeedback = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/generate-feedback', {
        question,
        userAnswer,
        correctAnswer
      });
      setFeedback(response.data.feedback);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      setFeedback('Error: Could not generate feedback. Please try again.');
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, [question, userAnswer, correctAnswer]);

  return (
    <div id="generateFeedback" style={{ display: 'flex', justifyContent: 'center', padding: '0 0 30px' }}>
      <textarea
        value={feedback}
        readOnly
        style={{
          width: '90%', // Set width to 70%
          height: '200px',
          marginTop: '30px',
          fontFamily: 'Calibri, sans-serif', // Set font to Calibri
          fontSize: '16px', // Set font size to 16
          textAlign: 'left', // Center the text inside the textarea
          border: '1px solid #ccc', // Optional: adds a border
          borderRadius: '4px', // Optional: rounds the corners
          padding: '10px', // Optional: adds some padding inside the textarea
          resize: 'none', // Prevents resizing
        }}
      />
    </div>
  );
};

export default GenFeedback;
