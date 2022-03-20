import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { Alert } from './Alert';


const initialState = {
  email: "",
  password: "",
}


const Login = () => {
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();
  const [error, setError] = useState()

  const {login, loginWithGoogle} = useAuth();

  const handleChange = ({target: {name,value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <div>
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input onChange={handleChange} type="email" placeholder='email@example.com'name='email'/>

        <label htmlFor='password'>Password</label>
        <input onChange={handleChange} type="password" placeholder='******' name='password'/>
        
        <button>Acceder</button>
    </form>
        <button onClick={handleGoogleSignin}>Acceder con Google</button>
    </div>
  )
}

export default Login