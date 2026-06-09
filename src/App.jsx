import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="counter-container">
        <h1 className="counter-title">Counter App</h1>
        <p className="counter-value">{count}</p>
        <div className="counter-buttons">
          <button className="counter-button" onClick={() => setCount(count + 1)}>Increment</button>
          <button className="counter-button" onClick={() => setCount(count - 1)}>Decrement</button>
          <button className="counter-button" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
