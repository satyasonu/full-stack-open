import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phNo: '0078-678-897' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const handlesubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const inputValue = formData.get('inputName');
      const numValue = formData.get('inputNum');
      const isExist = persons.find(x => x.name === inputValue) ? true : false;
      if(isExist){
        alert(`${inputValue} already exists`)
      }else{
        const newPersons = [...persons]
        setPersons([...newPersons, { name: inputValue, phNo: numValue }]);
        setNewName('')
        setNewNum('')
      }
      
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handlesubmit}>
        <div>
          name: <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} name="inputName" style={{ boxShadow: '-1px 1px 5px 2px rgba(66,214,237,1)', border: 'none'}} /><br/>
          number: <input type='text' value={newNum} onChange={(e) => setNewNum(e.target.value)} name="inputNum" style={{ boxShadow: '-1px 1px 5px 2px rgba(66,214,237,1)', border: 'none'}} />
        </div>
        <div>
          <button style={{ backgroundColor: 'white', border: 'none', borderRadius: '5px', boxShadow: '-1px 1px 5px 0px rgba(0,0,0,0.75)' }} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return(
          <p style={{ margin: 0, padding: 0}} key={person.name}>{person.name} {person.phNo}</p>
        )
      })}
    </div>
  )
}

export default App