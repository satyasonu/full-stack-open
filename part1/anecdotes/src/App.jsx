import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [objAnecdotes, setObjAnecdotes] = useState(
    Array(anecdotes.length).fill(0)
  );
  const [maxVote, setMaxVote] = useState(0);

  const handleClick = () => {
    const min = Math.ceil(0);
    const max = Math.floor(anecdotes.length - 1);
    setSelected(Math.floor(Math.random() * (max - min + 1) + min));
    
  };

  const handleVotebtn = () => {
    const updatedAnecdotes = [...objAnecdotes];
    updatedAnecdotes[selected] += 1;
    setObjAnecdotes(updatedAnecdotes);
    // setMaxVote(prev => prev.indexOf(Math.max.apply(null, prev))); 
    
  };
  useEffect(() => {
    const maxVoteIndex = objAnecdotes.indexOf(Math.max(...objAnecdotes));
    setMaxVote(maxVoteIndex);
  }, [objAnecdotes])
  console.log(objAnecdotes, objAnecdotes[selected]);
  console.log(objAnecdotes.indexOf(Math.max.apply(null, objAnecdotes)));

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <br />
      <p>has {objAnecdotes[selected]} votes</p>
      <button onClick={handleVotebtn}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdotes with most votes</h1>
      { selected !== 0 &&  <div>
        <p>{anecdotes[maxVote]}</p>
        <p>has {objAnecdotes[maxVote]} votes</p>
      </div>}
    </div>
  );
};

export default App;
