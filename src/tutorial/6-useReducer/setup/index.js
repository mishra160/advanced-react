import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { reducers } from '../setup/reducers'

const Intialvalue = {
  people: [],
  showModal: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducers, Intialvalue)

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  return (
    <>
      {state.showModal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}

      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className='btn' type='submit'>
          Add
        </button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <button onClick={() => dispatch({ type: 'REMOVE', payload: id })}>
              remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Index
