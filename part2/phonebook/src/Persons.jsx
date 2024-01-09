import React from 'react'

const Persons = ({persons}) => {
  return (
    <>
      {persons.map((person) => {
      return (
        <p style={{ margin: 0, padding: 0 }} key={person.name}>
          {person.name} {person.number}
        </p>
      );
    })}</>
  )
}

export default Persons