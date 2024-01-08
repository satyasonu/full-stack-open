import React from "react";
import Part from "./Part";

const Content = ({ content }) => {
  return (
    <>
      {content.map((oneContent) => {
        return (<Part key={oneContent.id} part={oneContent.name} exercises={oneContent.exercises} />)
      })}
    </>
  );
};

export default Content;
