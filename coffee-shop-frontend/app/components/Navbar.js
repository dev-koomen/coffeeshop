'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.classList.add('show-mobile-menu');
    } else {
      document.body.classList.remove('show-mobile-menu');
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove('show-mobile-menu');
  };
  
  return (
    <header>
      <nav className="navbar section-content">
        <Link href="/" className="nav-logo">
          <h2 className="logo-text">☕ Coffee</h2>
        </Link>
        <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button id="menu-close-button" onClick={toggleMobileMenu}>
            <i className="fas fa-times"></i>
          </button>
          <li className="nav-item">
            <Link href="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/#about" className="nav-link" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link href="/#menu" className="nav-link" onClick={closeMenu}>Menu</Link>
          </li>
          <li className="nav-item">
            <Link href="/#contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
        <button id="menu-open-button" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    </header>
  );
}