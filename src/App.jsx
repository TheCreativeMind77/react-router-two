import { useState } from 'react'
import './App.css'
import Root from './Root'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Root />
    </div>
  )
}

export default App
