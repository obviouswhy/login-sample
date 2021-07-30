import './App.css'
import React, { useEffect, useState } from 'react'
import { autheticateUser } from './utils/authAPI'

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      const result = await autheticateUser({
        username: 'user',
        password: '123',
      })
      setisLoggedIn(result.data.isAuth)
      setIsLoading(false)
    } catch (error) {
      setisLoggedIn(error.data.isAuth)
      setIsLoading(false)
      alert(error.message)
    }
  }
  useEffect(() => {
    handleLogin()
  }, [])

  return (
    <div className="App">
      {isLoading && (
        <div className={'loading-modal'}>
          <h1>読み込み中...</h1>
        </div>
      )}
      {isLoggedIn ? 'true' : 'false'}
    </div>
  )
}

export default App
