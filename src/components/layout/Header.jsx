import React from 'react'
import { Menu } from 'lucide-react'
import './Header.css'
import { Assets } from '../../assets/Assets'

const Header = () => {

  const navigation = [
    'Discussions',
    'Resources',
    'Groups & Events',
    'Champions',
    'Ask Expert'
  ]

  return (
    <header className="header">

      <div className="container">

        <div className="header-wrapper">

          {/* LOGO */}
          <div className="logo-wrapper">

            <h2 className="logo-text">
                <img src={Assets.Kytes_Logo}/>
            </h2>

          </div>

          {/* NAVIGATION */}
          <nav className="navigation">

            {navigation.map((item) => (
              <a
                href="/"
                key={item}
                className="nav-link-custom"
              >
                {item}
              </a>
            ))}

          </nav>

          {/* BUTTON */}
          <div className="desktop-btn">

            <button className="join-btn">
              Join Community
            </button>

          </div>

          {/* MOBILE */}
          <button className="mobile-menu">
            <Menu size={28} />
          </button>

        </div>

      </div>

    </header>
  )
}

export default Header