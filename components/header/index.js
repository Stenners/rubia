import React, { Component } from 'react'
import styled from 'styled-components';
import Logo from '../logo';
import Nav from '../nav';
import Menu from '../menu';

const HeaderWrap = styled.div`
  background-color: ${props => props.nude
    ? 'transparent'
    : '#1a1052'};
  transition: all .3s ease-in;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0 30px;
  box-sizing: border-box;
  z-index: 1;
  a {
    color: #fff;
    padding: 0 1rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 300;
    font-size: 80%;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  /* max-width: 1200px; */
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  svg {
    height: 40%;
  }
`;

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nude: props.nude,
      scrolled: false,
      mobile: true
    };
  }

  componentDidMount() {
    if (window.innerWidth > 700) {
      this.setState({ mobile: false });
    }
    if (this.props.nude) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollAmount = 120;
    if (window.pageYOffset > scrollAmount) {
      this.setState({ nude: false, scrolled: true });
    }
    if (window.pageYOffset < scrollAmount && this.state.scrolled === true) {
      this.setState({ nude: true, scrolled: false });
    }
  }

  render() {
    return (
      <HeaderWrap {...this.state}>
        <Container>
          <Logo width="130" />
          {this.state.mobile && <Nav />}
          {!this.state.mobile && <Menu />}
        </Container>
      </HeaderWrap>
    );
  }
}

export default Header;
