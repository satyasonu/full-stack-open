import React from 'react'

const PersonForm = ({data}) => {
  const {handlesubmit, newName, getNameInput, newNum, getNumInput} = data;
  console.log(typeof getNameInput)
  return (
    <form onSubmit={handlesubmit}>
        <div>
          name:{" "}
          <input
            type="text"
            value={newName}
            onChange={getNameInput}
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
            onChange={getNumInput}
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
  )
}

export default PersonForm;