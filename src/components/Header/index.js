import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <div className="nav-content-container">
        <Link to="/" className="nav-link">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="nav-website-logo"
          />
        </Link>
        <ul className="nav-sm-menu-container">
          <Link to="/" className="nav-link">
            <li>
              <AiFillHome className="home-icon" />
            </li>
          </Link>
          <Link to="/jobs" className="nav-link">
            <li>
              <BsBriefcaseFill className="brief-icon" />
            </li>
          </Link>
          <li>
            <button
              type="button"
              className="sm-logout-btn"
              onClick={onClickLogout}
            >
              <FiLogOut className="logout-icon" />
            </button>
          </li>
        </ul>
        <ul className="nav-lg-menu-container">
          <Link to="/" className="nav-link">
            <li className="home-item">Home</li>
          </Link>
          <Link to="/jobs" className="nav-link">
            <li className="jobs-item">Jobs</li>
          </Link>
        </ul>
        <button type="button" className="lg-logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
