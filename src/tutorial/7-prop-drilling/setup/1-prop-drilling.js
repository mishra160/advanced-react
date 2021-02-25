import React, { useState } from 'react'
import { data } from '../../../../src/data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const removeHandler = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(() => {
      return newPeople
    })
  }

  return (
    <>
      <h3>Prop Drilling</h3>
      <List remove={removeHandler} people={people} />
    </>
  )
}

const List = ({ remove, people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <div className='item' key={person.id}>
            <SingleItem remove={remove} {...person} key={person.id} />
          </div>
        )
      })}
    </>
  )
}
const SingleItem = ({ id, name, remove }) => {
  return (
    <>
      <h4>{name}</h4>
      <button onClick={() => remove(id)}>remove</button>
    </>
  )
}

export default PropDrilling
