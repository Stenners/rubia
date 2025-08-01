import React from "react";
import styled from "styled-components";

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
  // Static hours data - replace with your actual hours
  const hoursData = [
    { day: "Sun and Mon", hours: "Closed" },
    { day: "Tues", hours: "10am - 8:30pm" },
    { day: "Wed", hours: "Closed" },
    { day: "Thurs", hours: "Closed" },
    { day: "Fri", hours: "8:30am - 5:30pm"},
    { day: "Sat", hours: "8am - 4pm" }
  ];

  return (
    <HoursWrapper>
      <h2>Hours</h2>
      {hoursData.map((item, i) => (
        <Row key={i}>
          <div>{item.day}</div>
          <div>{item.hours}</div>
        </Row>
      ))}
    </HoursWrapper>
  );
};

export default Hours;
