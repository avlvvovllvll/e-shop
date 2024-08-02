import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(1)
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
  )
}
export default App
