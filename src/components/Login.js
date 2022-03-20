import React, { useState } from 'react'

const initialState = {
  email: "",
  password: "",
}

const Login = () => {

  const [user, setUser] = useState(initialState);

  return (
    <div>
        <form>
          <input type="email" name='email' placeholder='E-mail' id='email'  />
          <input type="text" name='password' placeholder='contraseña' id='password'/>
        </form>
    </div>
  )
}

export default Login