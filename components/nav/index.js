import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import styled from "styled-components";

const NavWrapper = styled.div`
  .bm-burger-button {
    position: absolute;
    width: 24px;
    height: 17px;
    right: 0;
    top: 26px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #ffffff;
    border-radius: 1px;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #ffffff;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #1a1052;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    a {
      color: white;
      padding: 1rem 0;
    }
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
    display: flex;
    flex-direction: column;
  }

  .bm-menu-wrap {
    top: 0;
    transition: all 0.3s !important;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
  }
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <NavWrapper>
        <Menu right isOpen={this.state.menuOpen}>
          <Link href="/">Home</Link>
          <Link href="/service-menu">Service Menu</Link>
          <Link href="/gallery">Gallery</Link>
          {/* <Link href="/contact">Contact</Link> */}
        </Menu>
      </NavWrapper>
    );
  }
}

export default Nav;
