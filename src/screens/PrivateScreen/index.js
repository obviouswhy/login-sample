import './privateScreen.css'
import React from 'react'
import { useHistory } from 'react-router-dom'

const PrivateScreen = () => {
  const history = useHistory()
  return (
    <div className={'private-screen-wrapper'}>
      <h1 className={'title'}>ログイン後画面</h1>
      <button
        className={'button'}
        aria-label="Log Out"
        onClick={() => history.replace('/')}>
        ログアウト
      </button>
    </div>
  )
}

export default PrivateScreen
