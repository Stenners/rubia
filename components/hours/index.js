import React from "react";
import styled from "styled-components";
import { StoryblokContext } from "../../pages/index";

const mobWidth = "700px";

const HoursWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  max-width: 1200px;
  margin: 3rem auto;
  h2 {
    text-align: center;
  }
  @media (min-width: ${mobWidth}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    h2 {
      width: 100%;
    }
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  @media (min-width: ${mobWidth}) {
    flex-direction: column;
    text-align: center;

    > div:first-child {
      border-bottom: 1px solid pink;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
  }
`;

const Hours = () => {
  const { content } = React.useContext(StoryblokContext);
  const days = content.hours.thead;
  const hours = content.hours.tbody[0].body;
  return (
    <HoursWrapper>
      <h2>Hours</h2>
      {days.map((day, i) => (
        <Row>
          <div>{day.value}</div>
          <div>{hours[i].value}</div>
        </Row>
      ))}
    </HoursWrapper>
  );
};

export default Hours;
