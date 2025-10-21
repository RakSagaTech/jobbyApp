import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <div className="nav-content-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="nav-website-logo"
        />
        <ul className="nav-sm-menu-container">
          <li>
            <AiFillHome className="home-icon" />
          </li>
          <li>
            <BsBriefcaseFill className="brief-icon" />
          </li>
          <li>
            <button type="button" className="sm-logout-btn">
              <FiLogOut className="logout-icon" />
            </button>
          </li>
        </ul>
        <ul className="nav-lg-menu-container">
          <li className="home-item">Home</li>
          <li className="jobs-item">Jobs</li>
        </ul>
        <button type="button" className="lg-logout-btn">
          Logout
        </button>
      </div>
    </nav>
  </>
)

export default Header
