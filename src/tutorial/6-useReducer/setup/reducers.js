export const reducers = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: 'item added',
    }
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      showModal: true,
      modalContent: 'plz input value',
    }
  }
  if (action.type === 'REMOVE') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )
    console.log(newPeople)
    return {
      ...state,
      people: newPeople,
      showModal: true,
      modalContent: 'item removed',
    }
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      showModal: false,
    }
  }
}
