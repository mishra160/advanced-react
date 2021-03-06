import React, { useState } from 'react'

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const { firstName, email, age } = person
    if (firstName && email && age) {
      const newPerson = {
        ...person,
        id: new Date().getTime().toString(),
      }
      setPeople([...people, newPerson])
      setPerson({ firstName: '', email: '', age: '' })
    }
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age:</label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            Add People
          </button>
        </form>
        <article>
          {people.map((person) => {
            const { id, firstName, email, age } = person
            return (
              <div className='item' key={id}>
                <h4>{firstName}</h4>
                <p style={{ marginRight: '8px' }}>{email}</p>
                <p>{age}</p>
              </div>
            )
          })}
        </article>
      </article>
    </>
  )
}

export default ControlledInputs
