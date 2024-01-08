import React from "react";
import Part from "./Part";

const Content = ({ content }) => {
  return (
    <>
      {content.map((oneContent, index) => {
        return (<Part key={index} part={oneContent.name} exercises={oneContent.exercises} />)
      })}
    </>
  );
};

export default Content;
