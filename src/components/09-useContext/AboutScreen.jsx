import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const userAbout = {
    id: 12465,
    name: 'Mario',
    email: 'Mario@gmail.com'
  }
  return (
    <div>
      <h1>AboutScreen</h1>
      <hr/>
      <button
        className="btn btn-primary"
        onClick={ () => setUser({...user ,userAbout})}
      >
        Login
      </button>
    </div>
  )
}

export default AboutScreen
