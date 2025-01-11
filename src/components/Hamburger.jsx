import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Hamburger.css';

function HMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuStateChange = (state) => {
        setMenuOpen(state.isOpen);
    }

    const handleClick = () => {
        setMenuOpen(false);
    };

    return (
        <Menu isOpen={menuOpen} onStateChange={handleMenuStateChange}>
          <a className="menu-item" href="#about" onClick={handleClick}>
            About
          </a>
          <a className="menu-item" href="#experience" onClick={handleClick}>
            Experience
          </a>
          <a className="menu-item" href="#projects" onClick={handleClick}>
            Projects
          </a>
          <a className="menu-item" href="#contact" onClick={handleClick}>
            Contact
          </a>
        </Menu>
      );
}

export default HMenu;