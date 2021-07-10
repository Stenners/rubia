import React from "react";
import styled from "styled-components";
import Header from "../components/header";

const Container = styled.section`
  padding: 70px 30px 0;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Contact</h2>

      </Container>
    </>
  );
};
export default Contact;
