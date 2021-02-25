import React, { useState } from 'react'

const ControlledInputs = () => {
  const [firstName, setfirstName] = useState('')
  const [email, setemail] = useState('')
  const [people, setPeople] = useState([])

  //submitform
  const SubmitForm = (e) => {
    e.preventDefault()
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      }
      console.log(person)
      setPeople((people) => {
        return [...people, person]
      })
      // setPeople(person)
      setfirstName('')
      setemail('')
    } else {
      console.log('please give a input')
    }
  }

  return (
    <>
      <form className='form' onSubmit={SubmitForm}>
        <div className='form-control'>
          <label htmlFor='firstname'>Name:</label>
          <input
            type='text'
            id='firstname'
            name='firstname'
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <button type='submit'>Add Person</button>
      </form>
      {people.map((peoples) => {
        const { id, firstName, email } = peoples
        return (
          <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </>
  )
}

export default ControlledInputs
