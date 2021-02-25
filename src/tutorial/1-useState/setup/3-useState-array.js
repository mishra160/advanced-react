import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, SetPeople] = useState(data)
  // remove all items at once
  // const removeHanlder = () => {
  //   SetPeople([])
  // }
  // remove specific item on click
  const removeHanlder = (id) => {
    const filterItems = people.filter((person) => person.id !== id)
    SetPeople(filterItems)
  }
  // remove all items at once
  const clearItems = () => SetPeople([])

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div className='item' key={id}>
            <h1>{name}</h1>
            <button onClick={() => removeHanlder(id)}>Clear Items</button>
          </div>
        )
      })}
      <button className='btn' onClick={clearItems}>
        clearItems
      </button>
    </>
  )
}

export default UseStateArray
