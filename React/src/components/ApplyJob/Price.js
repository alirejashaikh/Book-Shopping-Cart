import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import PriceCardDetails from "../ApplyJob/PriceCardDetails";
import { imageCollection1 } from "../CompanyDashboard/constant";
import Marquee from "react-fast-marquee";
import { Button } from "../ApplyJob/Styled/Button";
import { useNavigate } from "react-router-dom";


const Price = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SectionContainer>
      <>
        <br /><br />
        <CardContainer>
          

           <PriceCardDetails title={`Quick & Easy Job Posting - Get Quality Applies`}>
            <PriceCardContent>
              <p>
                Rs. 1650/job <br /> For All Cities <br />
              </p>

              <br />
              <ul>
                <li style={{ listStyleType: "square" }}>Detailed Job Description</li><br />
                <li style={{ listStyleType: "square" }}>Boost on Job Searcg Page</li><br />
                <li style={{ listStyleType: "square" }}>Job Branding</li>
              </ul>

              <br />

              <div className='card-button1'>
                <button className='btn btn-primary btn-lg' onClick={()=>{
                                        navigate("/ApplyJob/BuyNow/Cart");
                                    }}><h2>Buy Now</h2></button>
              </div>

            </PriceCardContent>
          </PriceCardDetails> 
        </CardContainer>

        <br /><br /><br /><br /><br />

        <ContainerCard>
          <ul>
            <li style={{ listStyleType: "disc" }} >Amount is Non-Refundable once paid.</li>
            <li style={{ listStyleType: "disc" }} >Please note that amounts are exclusive of taxes. Taxes will be added as applicable.</li>
            <li style={{ listStyleType: "disc" }} >For quantities upto 4, job posting credits should be consumed within 30 days from the date of activation/purchase.</li>
            <li style={{ listStyleType: "disc" }} >For quantities 5 and above, credits should be consumed within 1 year from the date of activation/purchase.</li>
          </ul>
        </ContainerCard>

        <br /><br /><br />

        <PartnersTitle>Our Partners</PartnersTitle>

        <PartnersContainer>
          <Marquee speed={100}>
            {imageCollection1.map((image) => (
              <Partners>
                <img src={image.link} alt="slider" />
              </Partners>
            ))}
          </Marquee>
        </PartnersContainer>
        <ButtonContainer>
          <Button>View All Partners</Button>
        </ButtonContainer>
      </>
    </SectionContainer>
  );
};
export default Price;

const SectionContainer = styled.div`
background-color: #F0FFF0;
`;

const CardContainer = styled.div`
display: flex;
gap: 2rem;
margin-top: 3rem;
justify-content: center;
box-shadow: 20px 20px 50px 15px grey;

 p
{
margin-left:105px;
gap:3em;
font-weight:bold;
font-size:17px;
color:black;
}
`;

const PartnersTitle = styled.h1`
font-size: 1.5em;
text-align: center;
color: blue;
font-family: Goudy Bookletter 1911, sans-serif;
padding-top: 50px;
`;

const Partners = styled.div`
display: grid;
place-items: center;
margin: 0 6rem;
img {
width: 250px;
}
`;
const PartnersContainer = styled.div`
margin: 2rem 0;
`;

const PriceCardContent = styled.div`
.icon {
margin-left:10px;
color:yellow;
}
.card-button1 {
margin-left:106px;
}
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`;

const ContainerCard = styled.div`
{
margin-left:105px;
gap:3em;
font-size:14px;
color:#555555;
}
`;