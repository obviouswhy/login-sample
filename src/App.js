import './App.css'
import React, { useState } from 'react'
import Login from './screens/Login'
import NotFound from './screens/404'
import PrivateScreen from './screens/PrivateScreen'
import AuthenticatedRoute from './utils/AuthenticatedRoute'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div className="App">
      {isLoading && (
        <div className={'loading-modal'}>
          <h1>読み込み中...</h1>
        </div>
      )}
      <Router>
        <Switch>
          <Route
            path={'/'}
            exact
            component={() => <Login {...{ setIsLoggedIn, setIsLoading }} />}
          />
          <AuthenticatedRoute
            exact
            path="/private"
            isLoggedIn={isLoggedIn}
            component={() => <PrivateScreen {...{ setIsLoggedIn }} />}
          />
          <Route path={'*'} exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
