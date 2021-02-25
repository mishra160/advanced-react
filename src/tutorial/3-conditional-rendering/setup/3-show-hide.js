import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', Checksize)
    return () => {
      window.removeEventListener('resize', Checksize)
    }
  }, [])
  const Checksize = () => {
    setSize(window.innerWidth)
  }
  const Item = () => {
    return (
      <div>
        <h1>Window</h1>
        <h3>size:{size}</h3>
      </div>
    )
  }

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        Show/hide
      </button>
      {show && <Item />}
    </>
  )
}

export default ShowHide
