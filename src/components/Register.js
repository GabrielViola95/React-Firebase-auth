import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';


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
    <div>
      {error && <p style={{color: "red", fontWeight: "bold"}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input onChange={handleChange} type="email" placeholder='email@example.com'name='email'/>

        <label htmlFor='password'>Password</label>
        <input onChange={handleChange} type="password" placeholder='******' name='password'/>
        
        <button>Registrar</button>
    </form>
    </div>
  )
}

export default Register