import { useState, useEffect } from 'react';
import Button from './components/Button';

function App() {
  const [good, setGood] = useState(() => {
    const getGood = localStorage.getItem("good");
    return getGood ? Number(getGood) : 0;
  });
  
  const [neutral, setNeutral] = useState(() => {
    const getNeutral = localStorage.getItem("neutral");
    return getNeutral ? Number(getNeutral) : 0;
  });

  const [bad, setBad] = useState(() => {
    const getBad = localStorage.getItem("bad");
    return getBad ? Number(getBad) : 0;
  });


  const total = good + neutral + bad;
  const positive = total > 0 ? Math.round((good / total) * 100) : 0;


  useEffect(() => {
    localStorage.setItem("good", good);
    localStorage.setItem("neutral", neutral);
    localStorage.setItem("bad", bad);
  }, [good, neutral, bad]);


  const handleClick = (type) => {
    if (type === "good") {
      setGood(prevGood => prevGood + 1);
    } else if (type === "neutral") {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (type === "bad") {
      setBad(prevBad => prevBad + 1);
    } else if (type === "reset") {
      setGood(0);
      setNeutral(0);
      setBad(0);
      localStorage.removeItem("good");
      localStorage.removeItem("neutral");
      localStorage.removeItem("bad");
      localStorage.removeItem("total");
    }
  };  

  return (
    <>
    <div className="outline-container">
      <h1 className="title">Sip Happens Café</h1>
      <p className="message">Please leave your feedback about our services by selecting one of the options below</p>
      <Button text="Good" class="button-good" onClick={() => handleClick("good")}/>
      <Button text="Neutral" class="button-neutral" onClick={() => handleClick("neutral")}/>
      <Button text="Bad" class="button-bad" onClick={() => handleClick("bad")}/>
      <Button text="Reset" class="button-reset" onClick={() => handleClick("reset")}/>
      {
        total > 0 ? (
          <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {positive}%</p>
          </>
        ) : (
          <p className="feedback-text">No feedback yet</p>
        )
      }
    </div>
    </>
  )
}

export default App
