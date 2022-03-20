import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { Alert } from './Alert';


const initialState = {
  email: "",
  password: "",
}


const Register = () => {
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();
  const [error, setError] = useState()

  const {signup} = useAuth();

  const handleChange = ({target: {name,value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='w-full max-w-xs m-auto'>
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor='email' className='block text-gray-700 text-sm font-fold mb-2'>Email</label>
          <input onChange={handleChange} type="email" placeholder='email@example.com'name='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
        </div>
        <div className="mb-4">
        <label htmlFor='password' className='block text-gray-700 text-sm font-fold mb-2'>Password</label>
        <input onChange={handleChange} type="password" placeholder='******' name='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
        </div>      
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Registrar</button>
    </form>
        <p className='my-4 text-sm flex justify-between'>¿Ya tienes una cuenta? <Link to="/login" className='underline'>Ingresar</Link></p>
    </div>
  )
}

export default Register