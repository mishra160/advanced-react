import React, { useState, useEffect } from 'react'
import { data } from '../../../data'
import { useParams, Link } from 'react-router-dom'

const Person = () => {
  const [name, SetName] = useState('default name')
  const { id } = useParams()
  // console.log(useParams())

  useEffect(() => {
    const newName = data.find((person) => person.id === parseInt(id))
    SetName(newName.name)
  }, [])

  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>
        Back To People
      </Link>
    </div>
  )
}

export default Person
