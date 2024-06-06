import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import UserContext from './components/UserContext'
import Hero from './components/Hero'
import Expenses from './components/Expenses'
import AddExpenses from './components/AddExpenses'
import { useReducer } from 'react';
import { reducer, initializer } from './components/Context'
import {  myContext } from './components/Context'


function App() {
  const [state, dispatch] = useReducer(reducer, initializer);

  return (
    <div className='w-[40%] mx-auto'>
      <myContext.Provider value={{state,dispatch}}>
        <Navbar />
        <Hero />
        <Expenses />
        <AddExpenses />
      </myContext.Provider>  
      
    </div>
  )
}

export default App
