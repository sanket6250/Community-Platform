import React from 'react'
import './Header.css'

import { Menu } from 'lucide-react'

import { Assets } from '../../assets/Assets'

import { navigationData } from '../../constants/navigation'

import NavDropdown from './NavDropdown'

const Header = () => {

  return (
    <header className="header">

      <div className="container">

        <div className="header-wrapper">

          {/* LOGO */}
          <div className="logo-wrapper">

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

            <button className="join-btn">
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