import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [search, setSearch] = useState("");
  const [filterPerson, setFilterPersons] = useState([]);

  const handlesubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputValue = formData.get("inputName");
    const numValue = formData.get("inputNum");
    const isExist = persons.find((x) => x.name === inputValue) ? true : false;
    if (isExist) {
      alert(`${inputValue} already exists`);
    } else {
      const newPersons = [...persons];
      setPersons([...newPersons, { name: inputValue, number: numValue }]);
      setNewName("");
      setNewNum("");
    }
  };

  const handlesearch = (e) => {
    setSearch(e.target.value);
    const filteredPersons = persons.filter((p) =>
      p.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterPersons(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter Shown with
        <input type="text" value={search} onChange={handlesearch} />
        {search &&
          filterPerson.map((person) => {
            return (
              <li key={person.id}>
                {person.name} {person.number}
              </li>
            );
          })}
      </div>
      <form onSubmit={handlesubmit}>
        <div>
          name:{" "}
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            name="inputName"
            style={{
              boxShadow: "-1px 1px 5px 2px rgba(66,214,237,1)",
              border: "none",
            }}
          />
          <br />
          number:{" "}
          <input
            type="text"
            value={newNum}
            onChange={(e) => setNewNum(e.target.value)}
            name="inputNum"
            style={{
              boxShadow: "-1px 1px 5px 2px rgba(66,214,237,1)",
              border: "none",
            }}
          />
        </div>
        <div>
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "5px",
              boxShadow: "-1px 1px 5px 0px rgba(0,0,0,0.75)",
            }}
            type="submit"
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <p style={{ margin: 0, padding: 0 }} key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
