import React from 'react';
import Header from './components/Header'
import UploadImage from './components/UploadImg';
import AnswerBoxes from './components/AnswerBoxes';
import GenerateFeedback from './components/GenFeedback';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <UploadImage />
      <GenerateFeedback />
    </div>
  );
};

export default App;