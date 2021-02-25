import React, { useState } from 'react'

const UseStateObject = () => {
  // person object
  const person = {
    id: 1,
    name: 'peter',
    age: 26,
    message: 'random message',
  }
  // [[ using useState for every item ]]
  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  // using useState()
  const [people, setPeople] = useState(person)

  // destructring object
  const { id, name, age, message } = people

  // changeMessage [[ using useState for every item with spread ]]
  const changeMessage = () => {
    setPeople({ ...people, message: 'HelloWorld' })
  }

  return (
    <>
      <h1>useState object example</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button className='btn' onClick={changeMessage}>
        changeMessage
      </button>
    </>
  )
}

export default UseStateObject
