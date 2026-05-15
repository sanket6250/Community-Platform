import React, { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const NavDropdown = ({ item }) => {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)

  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
    }

    setOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false)
    }, 160)
  }

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-dropdown-title">

        <a
          href={item.link}
          className={`nav-link-custom ${open ? 'nav-link-active' : ''}`}
        >
          {item.title}
        </a>

        {item.hasDropdown && (
          <ChevronDown
            size={16}
            className={`dropdown-arrow ${open ? 'rotate-arrow' : ''}`}
          />
        )}

      </div>

      {item.hasDropdown && open && (
        <div className="dropdown-menu-custom">
          {item.dropdownItems.map((dropdownItem) => (
            <a
              key={dropdownItem.title}
              href={dropdownItem.link}
              className="dropdown-item-custom"
            >
              {dropdownItem.title}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavDropdown