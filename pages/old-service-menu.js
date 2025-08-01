import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { getData, useStoryblok } from "../libs/storyblok";
import SbEditable from 'storyblok-react';

const mobWidth = "700px";

const Container = styled.section`
  padding: 70px 30px 0;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;
const PricingTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  h2,
  h3 {
    margin: 1rem 0;
  }
`;
const Col = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin-top: 1rem;
  @media (min-width: ${mobWidth}) {
    width: 50%;
    &:nth-child(odd) {
      padding: 0 3.3rem 0 0;
    }
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 2rem;
`;
const Divider = styled.hr`
  border-top: 1px solid pink;
  margin: 1rem 0;
`;

const ServiceMenu = ({ story, preview }) => {
  story = useStoryblok(story, preview)
  const items = story?.content?.blocks;
  return (
    <>
      <Header />
      <Container>
        <h2>Service Menu</h2>
        <PricingTable>
          {items.map((item) => (
            <SbEditable content={item}>
            <Col key={item?.title}>
              <h3>{item.title}</h3>
              {item.description && <h4>{item.description}</h4>}
              <Divider />
              {item?.table?.tbody.map((price) => (
                <Row key={price?._uid}>
                  {price?.body.map((el) => <div>{el?.value}</div>)}
                </Row>
              ))}
              <Divider />
            </Col>
            </SbEditable>
          ))}
        </PricingTable>
      </Container>
    </>
  )
};

export async function getStaticProps(context) {
  const { story } = await getData('service-menu', context);
  
  return {
    props: {
      story: story || false,
      preview: context.preview || false,
    },
  };
}

export default ServiceMenu;
