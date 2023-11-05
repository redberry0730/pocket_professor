import React, { useState } from 'react';

const AnswerBoxes: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  return (
    <div style={{}}>
    <div id="answerBoxes" className="rounded-box" style={{backgroundColor:'lightgreen', padding: '10px', paddingBottom: '30px', borderRadius:'30px', marginTop:'20px', width:'750px', marginLeft:'570px'}}>
      <div>
        <label style={{fontWeight: 'bold', marginRight:'610px'}}>Question:</label>
        <br />
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} style={{width:'700px', height: '150px'}}/>
      </div>
      <div>
        <label style={{fontWeight: 'bold', marginRight:'580px'}}>Your Answer:</label>
        <br />
        <textarea value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} style={{width:'700px', height: '150px'}} />
      </div>
      <div>
        <label style={{fontWeight: 'bold', marginRight:'550px'}}>Correct Answer:</label>
        <br />
        <textarea value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} style={{width:'700px', height: '150px'}} />
      </div>
    </div>
    </div>
  );
};

export default AnswerBoxes;