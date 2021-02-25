import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  //useEffect render after components re-render
  useEffect(() => {
    console.log('useEffect called')
    if (value >= 1) {
      document.title = `New Message(${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('useEffect With empty array')
  }, [])

  console.log('component render')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  )
}

export default UseEffectBasics
