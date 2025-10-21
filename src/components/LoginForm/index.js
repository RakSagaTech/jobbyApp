import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  renderPasswordField = () => {
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
        />
      </>
    )
  }

  renderUsernameField = () => {
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
        />
      </>
    )
  }

  render() {
    return (
      <div className="app-container">
        <form className="form-container">
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
        </form>
      </div>
    )
  }
}

export default LoginForm
