import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

  const { user, setUser } = useContext(UserContext);

  const userLogin = {
    id: 12465,
    name: 'Angel',
    email: 'angel@gmail.com'
  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr/>
      <button
        className="btn btn-primary"
        onClick={ () => setUser({...user, userLogin})}
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen
