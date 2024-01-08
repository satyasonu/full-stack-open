import React from 'react'

const Total = ({total}) => {
  
  var sum = 0;
  total.forEach(element => {
    sum = element.exercises + sum
  });
  return (
    <h5>total of {sum} exercises</h5>
  )
}

export default Total