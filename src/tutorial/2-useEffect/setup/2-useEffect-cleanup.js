import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkResize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log(`useEffect with window size ${size}`)
    window.addEventListener('resize', checkResize)
    // return () => {
    //   console.log('Cleanup')
    //   window.removeEventListener('resize', checkResize)
    // }
  }, [size])

  return (
    <>
      <h1>{size}</h1>
    </>
  )
}

export default UseEffectCleanup
