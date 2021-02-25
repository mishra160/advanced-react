import React, { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [error, setError] = useState(false)

  //// short-circuit evaluation
  const firstValue = text || 'Guest'
  const secondValue = text && text

  return (
    <>
      <input type='text' onChange={(e) => setText(e.target.value)} />
      <button className='btn' onClick={() => setError(!error)}>
        show/hide
      </button>

      {error ? <h1>SignIn with {firstValue}</h1> : <h1>Signout</h1>}
    </>
  )
}

export default ShortCircuit
