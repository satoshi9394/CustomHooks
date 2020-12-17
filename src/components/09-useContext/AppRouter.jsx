import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import NavBar from './NavBar'

const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <div  className="container">
          <Switch>
            <Route path="/" exact component={ HomeScreen } />
            <Route path="/about" exact component={ AboutScreen } />
            <Route path="/login" exact component={ LoginScreen } />
            <Redirect to="/"/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
