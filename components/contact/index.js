import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const mobWidth = '700px';

const ContactWrapper = styled.div`
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
        justify-content: space-around;
        h2 {
            width: 100%;
        }
    }
`;
const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
    > div:last-child {
        margin-left: 0.9rem;
        flex-direction: column;
    }
    h4, p {
        margin: 0.3rem 0;
    }
`;

const IconWrapper = styled.div`
    background-color: #271A67;
    border-radius: 2px;
    color: white;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-45deg);
    .svg-inline--fa.fa-w-16 {
        transform: rotate(45deg);
        width: 0.8em;
    }
`;

const Contact = () => (
    <ContactWrapper>
        <h2>Contact</h2>
        <Row>
            <IconWrapper>
                <FontAwesomeIcon icon={faPhone} />
            </IconWrapper>
            <div>
                <h4>Call us</h4>
                <p>(02) 8068 9825</p>
            </div>
        </Row>
        <Row>
            <IconWrapper>
                <FontAwesomeIcon icon={faPhone} />
            </IconWrapper>
            <div>
                <h4>Address</h4>
                <p>Shop 3, 549 Sydney Road Seaforth, 2092</p>
            </div>
        </Row>
    </ContactWrapper>
);

export default Contact