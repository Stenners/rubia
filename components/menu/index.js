import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  a {
    opacity: 0.7;
    text-decoration: none;
    color: white;
    padding: 0 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 300;
    font-size: 80%;
  }
  a.active {
    opacity: 1;
  }
`;

const Menu = (props) => {
  const router = useRouter();
  
  return (
    <MenuWrapper>
      <Link 
        href="/"
        className={router.pathname === "/" ? "active" : ""}
      >
        Home
      </Link>
      {/* <Link 
        href="/service-menu"
        className={router.pathname === "/service-menu" ? "active" : ""}
      >
        Service Menu
      </Link> */}
      <Link 
        href="/gallery"
        className={router.pathname === "/gallery" ? "active" : ""}
      >
        Gallery
      </Link>
      {/* <Link 
        href="/contact"
        className={router.pathname === "/contact" ? "active" : ""}
      >
        Contact
      </Link> */}
    </MenuWrapper>
  );
};

export default Menu;
