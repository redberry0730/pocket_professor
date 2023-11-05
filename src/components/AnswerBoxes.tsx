<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useEffect, useState } from 'react';

// Define the props that this component will accept
type AnswerBoxesProps = {
  extractedText: string;
};
>>>>>>> 33a6a9e4f78f579e97d1a82560e3f0815f962ac8

const AnswerBoxes: React.FC<AnswerBoxesProps> = ({ extractedText }) => {
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [contentVisible, setContentVisible] = useState(false); // New state to manage visibility


  // Parse the JSON whenever the extractedText prop changes
  useEffect(() => {
    try {
      const parsedData = JSON.parse(extractedText);
      setQuestion(parsedData.Question);
      setUserAnswer(parsedData.YourAnswer);
      setCorrectAnswer(parsedData.CorrectAnswer);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }, [extractedText]);
  useEffect(() => {
    setContentVisible(!!extractedText); // The content is visible if extractedText is not empty
  }, [extractedText]);

  return (
<<<<<<< HEAD
    <div style={{}}>
    <div id="answerBoxes" className="rounded-box" style={{backgroundColor:'lightgreen', padding: '10px', paddingBottom: '30px', borderRadius:'30px', marginTop:'20px', width:'750px', marginLeft:'570px'}}>
=======
    <div id="answerBoxes" className={`rounded-box ${contentVisible ? '' : 'hidden'}`}>
      {/* Content is always rendered, but visibility is controlled by contentVisible state */}
>>>>>>> 33a6a9e4f78f579e97d1a82560e3f0815f962ac8
      <div>
        <label style={{ fontWeight: 'bold', marginRight: '610px' }}>Question:</label>
        <br />
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} style={{ width: '700px', height: '150px' }} />
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginRight: '580px' }}>Your Answer:</label>
        <br />
        <textarea value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} style={{ width: '700px', height: '150px' }} />
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginRight: '550px' }}>Correct Answer:</label>
        <br />
        <textarea value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} style={{ width: '700px', height: '150px' }} />
      </div>
    </div>
    </div>
  );
};


export default AnswerBoxes;
