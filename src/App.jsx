import { useState } from 'react'

import './App.css'
import SelectionPanel from './components/SelectionPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <SelectionPanel/>
    </div>
  )
}

export default App
