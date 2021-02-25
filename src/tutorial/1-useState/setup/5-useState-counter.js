import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  //complexIncrease
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1
      })
    }, 2000)
  }
  const complexDecrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue - 1
      })
    }, 2000)
  }
  return (
    <>
      <h1>useState counter example</h1>
      <h1 style={{ marginTop: '20px' }}>SIMPLE COUNTER</h1>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button className='btn' onClick={() => setValue(0)}>
        Reset
      </button>
      <button className='btn' onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <h1 style={{ marginTop: '20px' }}>COMPLEX COUNTER</h1>
      <h3>{value}</h3>
      <button className='btn' onClick={complexIncrease}>
        ComplexIncrease
      </button>
      <button className='btn' onClick={complexDecrease}>
        ComplexDecrease
      </button>
    </>
  )
}

export default UseStateCounter
