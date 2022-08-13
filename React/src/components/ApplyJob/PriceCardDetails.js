import React from "react";
import styled from "styled-components";
const Card = styled.div`
min-height: 40rem;
width: 30rem;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
border-radius:25px;
`;
const CardHeading = styled.h2`
background: #00e0ff;
padding: 2rem;
text-align: center;
font-size: 2rem;
border-radius :10px;
`;

const CardContent = styled.div`
color: tomato;
font-weight: bold;
font-size:1.4rem;
`;
const CardTag = styled.div`
color: #1d020b;
font-weight: bold;
margin-top:13px;
`;
const PriceCardDetails = ({ title, children }) => {
    return (
        <Card>
            <CardHeading>{title}​​​</CardHeading>
            
            <CardContent>{children}​​​</CardContent>
        </Card>
    );
};
export default PriceCardDetails;
