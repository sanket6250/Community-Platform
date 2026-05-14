import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const NavDropdown = ({ item }) => {

  const [open, setOpen] = useState(false)

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >

      {/* MAIN NAV ITEM */}
      <div className="nav-dropdown-title">

        <a
          href={item.link}
          className="nav-link-custom"
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

      {/* DROPDOWN MENU */}
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