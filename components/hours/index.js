import React from 'react';
import styled from 'styled-components';

const mobWidth = '700px';

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
    margin: 10px 0 ;
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

const Hours = () => (
    <HoursWrapper>
        <h2>Hours</h2>
        <Row>
            <div>Sun and Mon</div>
            <div>closed</div>
        </Row>
        <Row>
            <div>Tues</div>
            <div>10am - 8:30pm</div>
        </Row>
        <Row>
            <div>Wed</div>
            <div>8:30am - 5:30pm</div>
        </Row>
        <Row>
            <div>Thurs</div>
            <div>10am - 8:30pm</div>
        </Row>
        <Row>
            <div>Fri</div>
            <div>8:30am - 5:30pm </div>
        </Row>
        <Row>
            <div>Sat</div>
            <div>8am - 4pm</div>
        </Row>
    </HoursWrapper>
);

export default Hours