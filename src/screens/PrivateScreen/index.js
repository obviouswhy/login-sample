import React from 'react'
import './privateScreen.css'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const PrivateScreen = ({ setIsLoggedIn }) => {
  const history = useHistory()
  const handleLogOut = () => {
    setIsLoggedIn(false)
    window.localStorage.setItem('isLoggedIn', false)
    history.replace('/')
  }
  return (
    <div className={'private-screen-wrapper'}>
      <h1 className={'title'}>ログイン後画面</h1>
      <button
        className={'button'}
        aria-label="Log Out"
        onClick={() => handleLogOut()}>
        ログアウト
      </button>
    </div>
  )
}

PrivateScreen.propTypes = {
  setIsLoggedIn: PropTypes.func,
}

export default PrivateScreen
