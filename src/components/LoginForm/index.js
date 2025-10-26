import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onSubmitFailure = errorMessage => {
    this.setState({
      showErrorMsg: true,
      errorMsg: errorMessage,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userLoginCredentials = {username, password}

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userLoginCredentials),
    }

    try {
      const response = await fetch(apiUrl, options)
      const dbData = await response.json()

      if (response.ok === true) {
        this.onSubmitSuccess(dbData.jwt_token)
      } else {
        this.onSubmitFailure(dbData.error_msg)
      }
    } catch (error) {
      this.onSubmitFailure('Something went wrong. Please try again.')
    }
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="input-label">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="user-input"
          onChange={this.onChangePassword}
          value={password}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="input-label">
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          className="user-input"
          onChange={this.onChangeUsername}
          value={username}
        />
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="app-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="user-input-container">
            {this.renderUsernameField()}
          </div>
          <div className="user-input-container">
            {this.renderPasswordField()}
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
