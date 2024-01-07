import React from 'react'

const Total = ({exercises}) => {
  return (
    <p>Number of exercises {exercises[0].exercises + exercises[1].exercises + exercises[2].exercises}</p>
  )
}

export default Total