const PersonForm = ( {addPerson, newName, handleNewName,
                      newNumber, handleNewNumber} ) => {
  //console.log('PersonForm - newName:', newName, '- newNumber:', newNumber)
  return (
    <form onSubmit={addPerson}>
      <div>
        name:
        <input
          value={newName}
          onChange={handleNewName}
        />
      </div>
      <div>
        number:
        <input
          value={newNumber}
          onChange={handleNewNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
