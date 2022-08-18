import { useState } from 'react'
import './App.css'
import { ProyectoDos } from './ProyectoDos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <ProyectoDos/>     
    </>
  )
}

export default App
