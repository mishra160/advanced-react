import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const refHeading = useRef(null)

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value)
  }
  //useEffect
  useEffect(() => {
    console.log(refContainer)
    console.log(refHeading.current.childNodes[0])
  }, [])
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' ref={refContainer} />
        <button className='btn' type='submit'>
          Button
        </button>
        <h1 ref={refHeading}>Hello World</h1>
      </form>
    </>
  )
}

export default UseRefBasics
