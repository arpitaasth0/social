import { useState } from 'react'//hook comes from this we need hook for ui updation
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter] =  useState(15)
//here counter is a variable and setCounter ia a function which is responsible for updation of the variable
  //let counter = 15
  
  const addValue= () => {
    console.log("clicked",counter);
    counter = counter +1
    setCounter(counter)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      
      <button
      onClick={addValue}>add value{counter}</button>
      <br></br>
      <button
      onClick={removeValue}>remove value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
