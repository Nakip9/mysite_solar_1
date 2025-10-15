    import React, { useState } from 'react';
    import './navbar.css'; // Import your existing CSS for navbar

    const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

      return (
        <header className="header" id="header">
          <nav className="nav container">
            <a href="#" className="nav__logo">Logo</a>

            <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">Home</a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">About Us</a>
                </li>
                <li className="nav__item">
                  <a href="#product_list" className="nav__link">Products</a>
                </li>
                <li className="nav__item">
                  <a href="#projects" className="nav__link">Our Projects</a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">Contact Us</a>
                </li>
              </ul>

              {/* Close button for mobile menu */}
              <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                <i className="ri-close-line"></i>
              </div>
            </div>

            {/* Menu Toggle Button */}
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </div>
          </nav>
        </header>
      );
    };

    export default navbar;
