import './App.css'
import React from 'react'
import Login from './screens/Login'
import PrivateScreen from './screens/PrivateScreen'
import Forbidden from './screens/403'
import NotFound from './screens/404'

const App = () => {
  return (
    <div className="App">
      <Login />
      <Forbidden />
      <NotFound />
      <PrivateScreen />
    </div>
  )
}

export default App
