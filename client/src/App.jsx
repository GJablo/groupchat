import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home user={user} /> : <Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
