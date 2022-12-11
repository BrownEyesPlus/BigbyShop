import './login.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { login } from '../../lib'
import { actions } from '../../reducers/app'

export default function Login() {
  const dispatch = useDispatch()


  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  const handleLogin = (e) => {
    const sendRequest = async () => {
      const params = {
        username,
        password,
        client_id: 'DLXZ7R6JbvVM6Iv10kNl9dEE5P1K5E0dJYS1x06q',
        client_secret: 'NELqEXJNjIm5FPytl4B1wD6tMW7ptAq24hPuQuD4LYbW42clKPkFPotwg9IKWmk3BJBaKrK7go65QgV1okbniWllyWGL78EKEYHzTiLHD2hDxiokAtBFWEXS9fzJMCkL',
        grant_type: 'password'
      }
      const response = await login(params)
      if (response.error) {
        setErrors(response.error)
        return
      }
      dispatch(actions.login(response))
      setErrors({})
      e.preventDefault()
      setIsSuccess(true)
    }
    if (username?.length > 0 && password?.length > 0) {
      e.preventDefault()
      sendRequest()
    }
  }

  // const showError = (errorsParam) => {
  //   const keys = Object.keys(errorsParam)
  //   const errorsMessage = keys.map((key) => {
  //     if (Array.isArray(errorsParam[key]))
  //       return errorsParam[key].join(', ')
  //     return errorsParam[key]
  //   })
  //   // if (errorsMessage?.contains('A user with that username already exists')) return 'Tài khoản này đã được đăng ký'
  //   return errorsMessage.toString()
  // }

  useEffect(() => {
    // console.log(isSuccess)
    setIsSuccess(false)
    setErrors({})
  }, [])

  useEffect(() => {
    if (isSuccess)
      console.log('Ok')
  }, [isSuccess])

  return (
    <div className="login" style={{ background: "url(" + "assets/images/login-background.png" + ")" }}>
      <div className="login-wrap center-box">
        <form className="login-form" onSubmit={handleLogin}>
          <h3 className="login-title">
            Đăng nhập
          </h3>
          {(Object.keys(errors).length > 0) && <p style={{ color: 'brown' }}>Tên tài khoản hoặc mật khẩu không đúng </p>}
          {isSuccess && <p style={{ color: 'green' }}>Đăng nhập thành công!</p>}
          <div className="login-form-group">
            <input
              type="text"
              className="login-input"
              id="login-input"
              placeholder="Tài khoản"
              onChange={e => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              className="login-input"
              id="login-password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Đăng nhập
          </button>
          <a href="/register" className="link-to text-center"
            style={{ marginTop: "60px", color: "#b10606" }}
          > Bạn chưa có tài khoản? </a>
          <p> Hoặc đăng nhập với</p>
          <div className="login-ways row">
            <div className="login-way facebook-way col-4">
              <i className="fa fa-facebook login-way-icon" style={{ background: "blue" }}>
              </i>
            </div>
            <div className="login-way twiter-way col-4">
              <i className="fa fa-twitter login-way-icon" style={{ background: "#18baf9" }}>
              </i>
            </div>
            <div className="login-way google-way col-4">
              <i className="fa fa-google login-way-icon" style={{ background: "#aa1919" }}>
              </i>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
