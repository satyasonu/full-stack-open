import React from "react";

const Filter = ({ search, filterPerson, searchFunction }) => {
  return (
    <div>
      Filter Shown with
      <input type="text" value={search} onChange={searchFunction} />
      {search &&
        filterPerson.map((person) => {
          return (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          );
        })}
    </div>
  );
};

export default Filter;
