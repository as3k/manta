import React, { useState } from 'react'
import generated from '../util/generate'
const options = {
  predicate: true,
  adverb: true,
  cap_first: false,
  number: false,
  punctuation: false,
}

const initialState = () => ({
  phrase: generated(options),
  options,
})

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