import React, {Component} from 'react';
import styled from 'styled-components';
import Logo from '../logo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const mobWidth = '700px';

const Wrapper = styled.section `
  width: 100vw;
  height: 100vh;
  /* background-color: pink; */
`;

const Bg = styled.div `
  background-image: url('/images/waterbg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0 10%;
  box-sizing: border-box;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s ease-in;
  @media (min-width: ${mobWidth}) {
    padding: 0 20%;
  }
`;

const Tagline = styled.h2 `
  letter-spacing: 0.5em!important;
  margin: 0!important;
  font-size: 22px;
  display: flex;
  align-self: flex-end;
  margin-bottom: 22px;
  @media (min-width: ${mobWidth}) {
    font-size: 32px;
  }
`;

const Address = styled.h2 `
  font-size: 16px;
  margin-bottom: 21px;
`;

const PhoneButton = styled.a `
  padding: 8px 45px;
  font-size: 12px;
  color: #fff;
  border: 2px solid rgba(255,255,255,.75);
  border-radius: 2px;
  font-weight: 300;
  text-decoration: none;
  letter-spacing: 2px;
  svg {
    margin-right: 1rem;
  }
`;

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  handleImageLoaded = () => {
    console.log('loaded');
    this.setState({loading: false});
  }

  componentDidMount() {
    this.setState({loading: true});
    this.image = new Image();
    this.image.src = '/images/waterbg.jpg';
    this.image.onload = this.handleImageLoaded;
  }

  render() {
    const loading = this.state.loading;
    return (
      <Wrapper>
        <Bg style={!loading ? {'opacity': 1} : {'opacity': 0}}>
          <Logo/>
          <Tagline>Hair Design</Tagline>
          <Address>SHOP 3, 549 SYDNEY ROAD SEAFORTH</Address>
          <PhoneButton href="tel:02-8068-9825">
            <FontAwesomeIcon icon={faPhone} />
            (02) 8068 9825
          </PhoneButton>
        </Bg>
      </Wrapper>
    );
  }

}

export default Landing;