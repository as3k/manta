import React, { useState } from 'react'

const initialState = {
  phrase: 'drunk_tense_duck_bares_cupboard',
  options: {
    predicate: true,
    adverb: true,
    cap_first: false,
    number: false,
  }
}

export const Context = React.createContext()

const Store = ({ children }) => {
  const [state, setState] = useState(initialState)
  return (
    <Context.Provider value={[ state, setState ]}>
      { children }
    </Context.Provider>
  )
}

export default Store