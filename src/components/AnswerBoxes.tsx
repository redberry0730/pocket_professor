import React, { useEffect, useState } from 'react';
import GenFeedback from "./GenFeedback";

// Define the props that this component will accept
type AnswerBoxesProps = {
  extractedText: string;
};

const AnswerBoxes: React.FC<AnswerBoxesProps> = ({ extractedText }) => {
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [contentVisible, setContentVisible] = useState(false); // New state to manage visibility
  const [feedbackRequested, setFeedbackRequested] = useState(false);


  const textareaStyle = {
    width: '700px',
    height: '150px',
    fontFamily: 'Calibri, sans-serif', // Set the font family to Calibri
    fontSize: '16px', // Set the font size to 12
  };

  const handleGenerateFeedback = () => {
    // Set a flag to indicate feedback was requested
    setFeedbackRequested(true);
  };

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

    <div 
      id="answerBoxes" 
      className={`rounded-box ${contentVisible ? '' : 'hidden'}`}
      style={{
        backgroundColor: 'green',
        color: 'white', 
        padding: '30px',
        paddingBottom: '30px',
        borderRadius: '30px',
        marginTop: '20px',
        width: '750px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >

      {/* Content is always rendered, but visibility is controlled by contentVisible state */}
      <div>
        <label style={{ fontWeight: 'bold', marginRight: '610px' }}>Question:</label>
        <br />
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} style={textareaStyle} />
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginRight: '580px' }}>Your Answer:</label>
        <br />
        <textarea value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} style={textareaStyle} />
      </div>
      <div>
        <label style={{ fontWeight: 'bold', marginRight: '550px' }}>Correct Answer:</label>
        <br />
        <textarea value={correctAnswer} onChange={((e) => setCorrectAnswer(e.target.value))} style={textareaStyle} />
      </div>
      <button onClick={handleGenerateFeedback} style={{ marginTop: '25px', padding: '10px' }}>Generate Feedback</button>
      {feedbackRequested && (
        <GenFeedback
          question={question}
          userAnswer={userAnswer}
          correctAnswer={correctAnswer}
        />
      )}
    </div>
  );
};


export default AnswerBoxes;

