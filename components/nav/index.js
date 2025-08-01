import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const NavWrapper = styled.div`
  .hamburger {
    position: absolute;
    right: 0;
    top: 26px;
    width: 24px;
    height: 17px;
    cursor: pointer;
    z-index: 1000;
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 3px;
    background: #ffffff;
    border-radius: 1px;
    transition: all 0.3s ease;
    margin-bottom: 4px;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .menu-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  .menu-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background: #1a1052;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
  }

  .menu-sidebar.active {
    transform: translateX(0);
  }

  .menu-sidebar a {
    color: white;
    padding: 1rem 0;
    display: block;
    text-decoration: none;
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavWrapper>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`menu-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      
      <div className={`menu-sidebar ${isOpen ? 'active' : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
      </div>
    </NavWrapper>
  );
};

export default Nav;
