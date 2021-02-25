import React, { useState, useEffect } from 'react'
// import { urls } from '../../../../src/github'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  // useState
  const [users, setUsers] = useState([])

  // getUsers
  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
  }

  // using useEffect
  useEffect(() => {
    console.log('useEffect Render')
    getUsers()
  }, [])

  return (
    <>
      <h1>Github Users</h1>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
