import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

const Container = styled.section`
  padding: 70px 30px 0;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const Gallery = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Gallery</h2>
        <InstagramFeed token="IGQVJWX3RwM19icGdmNE9EZAjMwUS1TVndKRjRLTFBSSzAxdzlPRFhTRkJjSG9ITHotSVNEYmNZAeWhETy1JUlNsQWQ4alFmc3ZAOaGFkZAFlKMzZADTGFGd3RiSllhajlveERJNHZAzZAzhSRHRraTRVZA0FMeQZDZD" />
      </Container>
    </>
  );
};
export default Gallery;
