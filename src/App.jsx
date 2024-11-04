import { useState, useEffect } from 'react';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Message from './components/Message/Message';
import Feedback from './components/Feedback/Feedback';

function App() {
  const [feedback, setFeedback] = useState(
    () => {
    const storedFeedback = {
      good: Number(sessionStorage.getItem('good')) || 0,
      neutral: Number(sessionStorage.getItem('neutral')) || 0,
      bad: Number(sessionStorage.getItem('bad')) || 0,
    };
    return storedFeedback;
  });

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total > 0 ? Math.round(((feedback.good + feedback.neutral) / total) * 100) : 0;

  useEffect(() => {
    Object.keys(feedback).forEach(key => {
      sessionStorage.setItem(key, feedback[key]);
    });
  }, [feedback]);

  const handleClick = (type) => {
    if (type === 'reset') {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
      Object.keys(feedback).forEach(key => {
        sessionStorage.removeItem(key);
      });
    } else {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [type]: prevFeedback[type] + 1,
      }));
    }
  };

  return (
    <div className="outline-container">
      <Title>Sip Happens Café</Title>
      <Message>Please leave your feedback about our services by selecting one of the options below</Message>
      <div className="button-container">
        <Button text="Good" addClass="button-good" onClick={() => handleClick('good')} />
        <Button text="Neutral" addClass="button-neutral" onClick={() => handleClick('neutral')} />
        <Button text="Bad" addClass="button-bad" onClick={() => handleClick('bad')} />
        <Button text="Reset" addClass="button-reset" onClick={() => handleClick('reset')} />
      </div>
      <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={total} positive={positive} />
    </div>
  );
}

export default App;