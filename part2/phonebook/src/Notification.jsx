import React from 'react'

const Notification = ({color, content}) => {
 

  return (
    <div className={`notification-${color}`}>{content}</div>
  )
  
}

export default Notification