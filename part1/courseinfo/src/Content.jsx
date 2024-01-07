import React from "react";
import Part from "./Part";

const Content = ({ content }) => {
  const { part1, exercises1, part2, exercises2, part3, exercises3 } = content;
  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
};

export default Content;
