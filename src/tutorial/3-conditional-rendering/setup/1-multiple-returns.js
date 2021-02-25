import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setisLoading] = useState(true)
  const [isError, setisError] = useState(false)
  const [user, setuser] = useState('Default user')

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          setisLoading(false)
          setisError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setuser(login)
        setisLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h2>Page not found</h2>
      </div>
    )
  }

  return (
    <>
      <h2>{user}</h2>
    </>
  )
}

export default MultipleReturns
