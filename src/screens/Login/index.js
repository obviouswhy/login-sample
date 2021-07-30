import './login.css'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Login = () => {
  const history = useHistory()
  const [user, setUser] = useState({ username: '', password: '' })

  // const handleLogin = async () => {
  //   setIsLoading(true)
  //   try {
  //     const result = await autheticateUser({
  //       username: 'user',
  //       password: '123',
  //     })
  //     setisLoggedIn(result.data.isAuth)
  //     setIsLoading(false)
  //   } catch (error) {
  //     setisLoggedIn(error.data.isAuth)
  //     setIsLoading(false)
  //     alert(error.message)
  //   }
  // }

  return (
    <div className={'login-wrapper'}>
      <div className={'row'}>
        <h1 className={'title'}>ログイン画面</h1>
      </div>
      <div className={'row'}>
        <div className={'input-wrapper'}>
          <label className={'textbox-label'}>ユーザー名</label>
          <input
            className={'textbox'}
            aria-label="Username Input"
            value={user.username}
            placeholder={'user'}
            onChange={e =>
              setUser(prevState => ({
                ...prevState,
                username: e.target.value,
              }))
            }
          />
          <label className={'textbox-label'}>パスワード</label>
          <input
            className={'textbox'}
            type={'password'}
            aria-label="Password Input"
            placeholder={'**********'}
            value={user.password}
            onChange={e =>
              setUser(prevState => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className={'row'}>
        <button
          className={'button'}
          aria-label="Log In"
          onClick={() => history.push('/private')}>
          ログイン
        </button>
      </div>
      <div className={'row'}>
        <label className={'small-label'}>
          (ユーザー名はuserです。パスワードも123です)
        </label>
      </div>
    </div>
  )
}

export default Login
