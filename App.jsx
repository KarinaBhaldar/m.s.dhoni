import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Nav/>
<Home/>
<Nav/>
   </>
  )
}

export default App
