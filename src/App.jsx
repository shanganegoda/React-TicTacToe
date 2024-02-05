import { useState } from 'react'
import './App.css'

function Square({value, onSquareClick}) {

  return (
    <button onClick={onSquareClick} className='border-2 border-green-900 w-16 h-16 inline-flex -ml-1 items-center justify-center'>{value}</button>
  )
}

function App() {
  
  const [xIsNext, setXIsNext] = useState(true)
  const [values, setValues] = useState(Array(9).fill(null))

  function handleClick(i) {
    let nextValues = values.slice()
    if(xIsNext){
      nextValues[i] = "X"
    } else {
      nextValues[i] = "O"
    } 
    setValues(nextValues)
    setXIsNext(!xIsNext)
  }

  return (
    <>
      <div className='flex'>
        <Square onSquareClick={() => handleClick(0)} value = {values[0]}/>
        <Square onSquareClick={() => handleClick(1)} value = {values[1]}/>
        <Square onSquareClick={() => handleClick(2)} value = {values[2]}/>
      </div>
      <div className='flex'>
        <Square onSquareClick={() => handleClick(3)} value = {values[3]}/>
        <Square onSquareClick={() => handleClick(4)} value = {values[4]}/>
        <Square onSquareClick={() => handleClick(5)} value = {values[5]}/>
      </div>
      <div className='flex'>
        <Square onSquareClick={() => handleClick(6)} value = {values[6]}/>
        <Square onSquareClick={() => handleClick(7)} value = {values[7]}/>
        <Square onSquareClick={() => handleClick(8)} value = {values[8]}/>
      </div>
    </>
  )
}

export default App
