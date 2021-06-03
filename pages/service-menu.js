import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { getData, useStoryblok } from "../libs/storyblok";

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

const pricingArr = [
  {
    title: "Colour",
    desc: "Foils with style cut and blow dry",
    prices: [
      { "1/2 head foils": "from $160" },
      { "Full head foils": "from $190" },
      { "Balayage and Ombres": "from $170" },
    ],
  },
  {
    title: "Permanent Color",
    desc: "with cut and Blow Wave",
    prices: [
      { Tint: "from $145" },
      { "Tint and foils": "from $165" },
      { "Tint and demi": "from $170" },
      { "Tint, foils and demi": "from $180" },
      { "Hairline only": "$35" },
    ],
  },
  {
    title: "Keratin Smoothing",
    prices: [{ "": "from $150" }],
  },
  {
    title: "Bridal",
    prices: [{ "": "from $100pp" }],
  },
  {
    title: "Demi permanent colour",
    desc: "With cut and style",
    prices: [
      { "Demi tint": "from $140" },
      { "Demi tint with foils": "from $160" },
      { "Colour correction": "from $180" },
      { "Extra colour / brights and pastels": "from $25" },
    ],
  },
  {
    title: "Styling",
    prices: [
      { "Blow wave short hair": "$45" },
      { "Blow wave long hair": "from $50" },
      { "Up style": "from $80" },
    ],
  },
  {
    title: "Cut and Style",
    desc: "All haircuts include a shampoo and Blow Wave",
    prices: [
      { "Womens style cut": "from $75" },
      { "Mens style cut": "$40" },
      { "Uni students women": "$65" },
      { "Uni students men": "$32" },
      { "Highschool girls": "$60" },
      { "Highschool boys": "$30" },
      { "Primary school girls": "$40" },
      { "Primary school boys": "$25" },
    ],
  },
];

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
    revalidate: 10,
  };
}

export default ServiceMenu;
