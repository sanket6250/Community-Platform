import React from 'react'
import './Header.css'

import { Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Assets } from '../../assets/Assets'
import { navigationData } from '../../constants/navigation'
import NavDropdown from './NavDropdown'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="header">

      <div className="container">

        <div className="header-wrapper">

          {/* LOGO */}
          <div
            className="logo-wrapper"
            onClick={() => navigate('/')}
          >
            <img
              src={Assets.Kytes_Logo}
              alt="Kytes Logo"
              className="logo-image"
            />
          </div>

          {/* NAVIGATION */}
          <nav className="navigation">

            {navigationData.map((item) => (
              <NavDropdown
                key={item.id}
                item={item}
              />
            ))}

          </nav>

          {/* BUTTON */}
          <div className="desktop-btn">

            <button
              className="join-btn"
              onClick={() => navigate('/login')}
            >
              Join Community
            </button>

          </div>

          {/* MOBILE MENU */}
          <button className="mobile-menu">
            <Menu size={28} />
          </button>

        </div>

      </div>

    </header>
  )
}

export default Header