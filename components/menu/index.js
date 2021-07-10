import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MenuWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  a {
    opacity: 0.7;
  }
  a.active {
    opacity: 1;
  }
`;

const Menu = (props) => {
  return (
    <MenuWrapper>
      <Link activeClassName="active" href="/">
        Home
      </Link>
      <Link activeClassName="active" href="/service-menu">
        Service Menu
      </Link>
      <Link activeClassName="active" href="/gallery">
        Gallery
      </Link>
      {/* <Link activeClassName="active" href="/contact">
        Contact
      </Link> */}
    </MenuWrapper>
  );
};

export default Menu;
