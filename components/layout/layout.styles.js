import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit; }
`;


export const SiteWrap = styled.div`
  margin: 0 auto;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  color: #271A67;
  h1, h2, h3 {
    font-family: 'Dosis', sans-serif;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.3em;
  }
  h4 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 17px;
  }

`;