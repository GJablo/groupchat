import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/api'

const Login = ({ setUser }) => {

  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await registerUser(username);
    setUser(res.data);
    navigate('/');
  };

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <div className='p-6 bg-white rounded shadow-md w-96'>
        <h1 className='text-xl font-bold mb-4'>Join Chat</h1>
        <input
          className='w-full p-2 border rounded mb-4'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin} className='w-full p-2 bg-blue-500 text-white rounded'>Enter</button>
      </div>
    </div>
  )
}

export default Login
