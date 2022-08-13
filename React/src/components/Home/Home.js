import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import DetailsCard from "../Components/DetailsCard/DetailsCard";
import { imageCollection, imageCollection1 } from "../constant";
import { FaHandPointRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Button } from "../Styled/Button";




const Home = () => {
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
<Slider {...settings}>
{imageCollection.map((image) => (
<div>
<SliderContainer>
<img src={image.link} alt="slider" />
</SliderContainer>
</div>
))}
</Slider>
<CardContainer>
<DetailsCard title={`Conveniences`}>




<br /><br />



<ul>
<li style={{ listStyleType: "disc" }} >OES reduces time to hire</li><br />
<li style={{ listStyleType: "disc" }} >Cost-effective recruitment method</li><br />
<li style={{ listStyleType: "disc" }} >OES gives facility to hire efficient candidate</li><br />
<li style={{ listStyleType: "disc" }} >Easy implementation of features</li>
</ul>

</DetailsCard>



<DetailsCard title={`Plan: Growth Strategy`}>
<TwitterCardContent>
{[
{ name: "Define your goals", link: "/example1" },
{ name: "Keep timelines short", link: "/example2" },
{ name: "Perform market research", link: "/example1" },
{ name: "Create a forecasting model", link: "/example2" },
{ name: "Identify actionable steps", link: "/example2" },
].map((item) => (
<div className="links">
<div className="icon">
<FaHandPointRight />
</div>
<a href={item.link}>{item.name}</a>
</div>
))}
</TwitterCardContent>
</DetailsCard>



<DetailsCard title={`About`}>

<About>
<p>
At present, there is a Job-Crises and it is very hard to
find job for users despite having
talent. They struggle to find suitable job at right time.
On the other hand, it's not easier for recuiters as well
to hire suitable candidate they want in actual.
</p>
</About>
</DetailsCard>
</CardContainer>



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
export default Home;



const SectionContainer = styled.div`
background-color: #F0FFF0;
`;



const CardContainer = styled.div`
display: flex;
gap: 2rem;
margin-top: 3rem;
justify-content: center;



p
{
margin-left:10px;
color: palevioletred;
}



&:hover {
background-color: #FFFF00;
}
`;



const SliderContainer = styled.div`
margin-top: 50px;
padding: 10px;
border-radius: 8px;
background-color: #fff;
box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
margin: 20px 20px;
img {
width: 100%;
height: 500px;
object-fit: cover;
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



const TwitterCardContent = styled.div`
.links {
display: flex;
align-items: center;
marging:2rem;
gap: 1rem;
line-height:45px;
}
.icon {
margin-left:10px;
color:yellow;
}
`;



const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`;



const About = styled.div`
height:10px;
justify-content:space-between;
line-height:35px;