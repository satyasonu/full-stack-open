import React from 'react'

const Total = ({total}) => {
  
  const sum = total.reduce((a, b) => a + b.exercises, 0)
  return (
    <h5>total of {sum} exercises</h5>
  )
}

export default Total