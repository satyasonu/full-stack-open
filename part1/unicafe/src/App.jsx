import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnStyles = {
    backgroundColor: "white",
    borderRadius: "5px",
    borderColor: "Silver",
    fontWeight: "bold",
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button
          styles={btnStyles}
          text={"good"}
          handleBtn={() => setGood(good + 1)}
        />
        <Button
          styles={btnStyles}
          text={"neutral"}
          handleBtn={() => setNeutral(neutral + 1)}
        />
        <Button
          styles={btnStyles}
          text={"bad"}
          handleBtn={() => setBad(bad + 1)}
        />
      </div>
      <h1>statistics</h1>
      {good || neutral || bad ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          fontWeight: "bold",
        }}
      >
        <StatisticsLine text={"good"} value={good} />
        <StatisticsLine text={"neutral"} value={neutral} />
        <StatisticsLine text={"bad"} value={bad} />
        <StatisticsLine text={"all"} value={all} />
        <StatisticsLine text={"average"} value={average} />
        <StatisticsLine text={"positive"} value={positive} />
      </div>
    </>
  );
};

const Button = ({ styles, text, handleBtn }) => {
  return (
    <button style={styles} onClick={handleBtn}>
      {text}
    </button>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <p style={{ margin: 0 }}>
      {text} {value}
    </p>
  );
};

export default App;
