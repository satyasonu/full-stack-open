import { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personService from "./services/PersonService";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [search, setSearch] = useState("");
  const [filterPerson, setFilterPersons] = useState([]);
  const [notificationdata, setNotificationdata] = useState({});

  useEffect(() => {
    personService.getAll().then((initialdata) => setPersons(initialdata));
  }, []);

  const handlesubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputValue = formData.get("inputName");
    const numValue = formData.get("inputNum");
    const isExist = persons.find((x) => x.name === inputValue) ? true : false;
    if (isExist) {
      const wantToAddNewNumber = window.confirm(
        `${inputValue} is already added to phonebook, replace old number with new one?`
      );
      if (wantToAddNewNumber) {
        setNewName("");
        setNewNum("");
        const newPerson = {
          name: inputValue,
          number: numValue,
        };
        personService
          .updateContact(
            persons.find((x) => x.name === inputValue).id,
            newPerson
          )
          .then((data) => {
            const newPerson = {
              name: inputValue,
              number: numValue,
              id: data.id
            };
            const personindex = persons.findIndex((p) => p.id === data.id);
            const newState = [...persons];
            newState[personindex] = newPerson;
            setPersons(newState);
            setNotificationdata({color: 'green', content: `Changed number for ${data.name}` })
        setTimeout(() => {
          setNotificationdata({});
          console.log('updated')
        }, 12000);
          });
      }
    } else {
      setNewName("");
      setNewNum("");
      const newPerson = {
        name: inputValue,
        number: numValue,
        id: persons.length === 0 ? 1 : persons[persons.length - 1].id + 1,
      };
      personService.create(newPerson).then((data) => {
        setPersons(persons.concat(data));
        setNotificationdata({color: 'green', content: `Added ${data.name}` })
        setTimeout(() => {
          setNotificationdata({});
          console.log('added')
        }, 12000);
      });
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

  const handleDelete = (person) => {
    const confirmation = window.confirm(`Delete ${person.name} ?`);
    if (confirmation) {
      personService.deleteContact(person).then((data) => {
        if (data.status === 200) {
          const restpersons = persons.filter((p) => p.id !== person.id);
          setPersons(restpersons);
        }
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {notificationdata && <Notification color={notificationdata.color} content={notificationdata.content} />}
      <Filter
        search={search}
        filterPerson={filterPerson}
        searchFunction={handlesearch}
      />
      <PersonForm
        data={{ handlesubmit, newName, getNameInput, newNum, getNumInput }}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} deletefunction={handleDelete} />
    </div>
  );
};

export default App;
