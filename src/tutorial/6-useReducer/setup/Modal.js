import React, { useEffect } from 'react'

const Modal = ({ closeModal, modalContent }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 1000)
  })

  return (
    <div className='modal' style={{ color: 'red' }}>
      {modalContent}
    </div>
  )
}

export default Modal
