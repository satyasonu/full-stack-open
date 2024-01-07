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
        <button style={btnStyles} onClick={() => setGood(good + 1)}>
          good
        </button>
        <button style={btnStyles} onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button style={btnStyles} onClick={() => setBad(bad + 1)}>
          bad
        </button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;
  return (
    <>
      <h1>statistics</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 0,
          fontWeight: "bold",
        }}
      >
        <p style={{ margin: 0 }}>good {good}</p>
        <p style={{ margin: 0 }}>neutral {neutral}</p>
        <p style={{ margin: 0 }}>bad {bad}</p>
        <p style={{ margin: 0 }}>all {all}</p>
        <p style={{ margin: 0 }}>average {average}</p>
        <p style={{ margin: 0 }}>positive {positive}</p>
      </div>
    </>
  );
};

export default App;
