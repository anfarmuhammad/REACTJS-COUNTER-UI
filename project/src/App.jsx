import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const addCount=()=>{
    setCount(count+1);
  }
  const decrbutn=()=>{
    setCount(count-1);
  }
  const resetbtn=()=>{
    setCount(0)
  } 
  return (
    <div className="w-screen h-screen bg-red-800 flex flex-col items-center">
   
    <div className="w-full h-24 bg-black flex items-center justify-between px-6 md:px-24">
      <h1 className="text-white text-3xl md:text-5xl font-semibold font-mono">REACT JS</h1>
      <ul className="text-white flex flex-row space-x-4 md:space-x-16">
        <li>VITE</li>
        <li>TAILWIND</li>
        <li>INCREMENT</li>
        <li>DECREMENT</li>
      </ul>
    </div>
  
   
    <div className="w-full max-w-xl flex flex-col items-center mt-16 space-y-6">
      <h1 className="text-3xl md:text-4xl font-mono text-white">COUNTER: {count}</h1>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <button
          onClick={addCount}
          className="bg-black w-36 h-12 text-white hover:bg-gray-700 transition"
        >
          Increment
        </button>
        <button
          onClick={resetbtn}
          className="bg-black w-36 h-12 text-white hover:bg-gray-700 transition"
        >
          Reset
        </button>
        <button
          onClick={decrbutn}
          className="bg-black w-36 h-12 text-white hover:bg-gray-700 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  </div>
  
  )
}
export default App
