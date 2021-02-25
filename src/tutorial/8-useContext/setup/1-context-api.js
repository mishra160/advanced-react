import React, { useState, useContext } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)
const PeopleContext = React.createContext()

const ContextAPI = () => {
  const [people, setPeople] = useState(data)

  // provider & consumer
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }
  return (
    <>
      <PeopleContext.Provider value={{ removePerson, people }}>
        <h3>prop drilling</h3>
        <List />
      </PeopleContext.Provider>
    </>
  )
}

const List = () => {
  const mainData = useContext(PeopleContext)
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PeopleContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
