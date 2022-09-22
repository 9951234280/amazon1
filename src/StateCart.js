import React from 'react'
import {createContext,useContext,useReducer} from 'react'

export const StateContext=createContext()
export const StateCart=({initialstate,reducer,children})=> {
  return (
    <StateContext.Provider value={useReducer(initialstate,reducer)} >
      {children}
    </StateContext.Provider >
  )
}

export default StateCart
export const useStatevalue=()=>useContext(StateContext)
