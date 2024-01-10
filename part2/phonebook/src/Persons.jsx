import React from "react";

const Persons = ({ persons, deletefunction }) => {
  return (
    <>
      {persons.map((person) => {
        return (
          <p style={{ margin: 0, padding: 0 }} key={person.name}>
            {person.name} {person.number}{" "}
            <button
              style={{
                backgroundColor: "transparent",
                borderRadius: "5px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 1.321)",
                border: 'none',
                
              }}
              onClick={() => deletefunction(person)}
            >
              delete
            </button>
          </p>
        );
      })}
    </>
  );
};

export default Persons;
