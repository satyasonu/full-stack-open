import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from 'axios'
import personService from './services/PersonService'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [search, setSearch] = useState("");
  const [filterPerson, setFilterPersons] = useState([]);

  const baseUrl = "http://localhost:3001/persons";

  useEffect(() => {
    personService
      .getAll()
      .then(initialdata => setPersons(initialdata))
  },[])

  const handlesubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputValue = formData.get("inputName");
    const numValue = formData.get("inputNum");
    const isExist = persons.find((x) => x.name === inputValue) ? true : false;
    if (isExist) {
      alert(`${inputValue} already exists`);
    } else {
      // const newPersons = [...persons];
      // setPersons([...newPersons, { name: inputValue, number: numValue }]);
      setNewName("");
      setNewNum("");
      const newPerson = { name: inputValue, number: numValue, id: persons.length === 0 ? 1 : persons[persons.length - 1].id + 1}
      console.log(newPerson)
      personService
        .create(newPerson)
        .then(data => {
          setPersons(persons.concat(data))
        })
    }
  };

  const handlesearch = (e) => {
    setSearch(e.target.value);
    const filteredPersons = persons.filter((p) =>
      p.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterPersons(filteredPersons);
  };

  const getNameInput = (e) => {
    setNewName(e.target.value);
  };

  const getNumInput = (e) => {
    setNewNum(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        search={search}
        filterPerson={filterPerson}
        searchFunction={handlesearch}
      />
      <PersonForm
        data={{ handlesubmit, newName, getNameInput, newNum, getNumInput }}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
