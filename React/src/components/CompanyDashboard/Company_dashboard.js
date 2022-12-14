import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { imageCollection, imageCollection1 } from "./constant";
import { FaHandPointRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Button } from "./Styled/Button";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import DetailsCard from "./DetailsCard/DetailsCard";
import ApplyJob from "../ApplyJob/Price";
import { useNavigate } from "react-router-dom";
const Company_dashboard = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/');
}
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; return (
    <div>
      <div>

        <Header>
          <Nav>
            {/* <Logo>
              <img src="/images/logo.jpg" alt="logo" />
            </Logo> */}
            <ul>
              {routes.map((link) => (
                <NavLink
                  exact={link.exact}
                  activeClassName="active"
                  to={link.route}
                  key={link.name}
                >
                  <li>
                    {link.icon}
                    <p className="link_name">{link.name}</p>
                  </li>
                </NavLink>
              ))}
              <button onclick={Logout}>Logout</button>
            </ul>
          </Nav>
        </Header>
      </div>


<content></content>
      <div className='mt-2'>
      <div className="row mb-3">
                {/* <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                            <div className="rotate">
                                <div className="fa fa-user fa-4x"></div>
                            </div>
                            <h6 className="text-uppercase">Book Your Ticket</h6>
                            <h1 className="display-4"></h1>
                            <button className="btn btn-danger" onClick={()=>{
                                        navigate("/CompanyDashboard/JobPost");

                                          // route: "/CompanyDashboard/CompanyProfile",

                                    }}>Book Ticket</button>

                        </div>
                    </div>
                </div> */}
                {/* <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-dark h-100">
                        <div className="card-body bg-dark">
                            <div className="rotate">
                                <div className="fa fa-building fa-4x"></div>
                            </div>
                            <h6 className="text-uppercase">Check Your Profile</h6>
                            <h1 className="display-4">87</h1>
                            <button className="btn btn-danger" onClick={()=>{
                                        navigate("/CompanyDashboard/CompanyProfile");
                                    }}>Check Profiles</button>
                        </div>
                    </div>
                </div> */}
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <div className=" fa fa-comments fa-4x" ></div>
                            </div>
                            <div className="text-uppercase">Look into All Books</div>
                            <h1 className="display-4">10</h1>
                            <div className="btn1">
                                <left><button className="btn btn-danger" onClick={()=>{
                                        navigate("/Admin/UserQuery");
                                    }}>View Books</button></left>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <div className="fa fa-comments fa-4x "></div>
                            </div>
                            <h6 className="text-uppercase"> User Queries</h6>
                            <h1 className="display-4">14</h1>
                            <button className="btn btn-danger" onClick={()=>{
                                        navigate("/Admin/CompanyQuery");
                                    }}>User Query</button>
                        </div>
                    </div>
                </div> */}
            </div>
      </div>
    </div>
  );
};

export default Company_dashboard;
const SectionContainer = styled.div`
background-color: #F0FFF0;
`; const CardContainer = styled.div`
display: flex;
gap: 2rem;
margin-top: 3rem;
justify-content: center; p
{
margin-left:10px;
color: palevioletred;
} &:hover {
background-color: #FFFF00;
}
`; const SliderContainer = styled.div`
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
`; const PartnersTitle = styled.h1`
font-size: 1.5em;
text-align: center;
color: blue;
font-family: Goudy Bookletter 1911, sans-serif;
padding-top: 50px;
`; const Partners = styled.div`
display: grid;
place-items: center;
margin: 0 6rem;
img {
width: 250px;
}
`;
const PartnersContainer = styled.div`
margin: 2rem 0;
`; const TwitterCardContent = styled.div`
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
`; const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`; const About = styled.div`
height:10px;
justify-content:space-between;
line-height:35px;
`;
const Header = styled.header`
background-color: #1f5156;
position: sticky;
top: 0;
z-index: 100;
`;
const Nav = styled.nav`
color: white;
max-width: 1300px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;



ul {
display: flex;
align-items: center;
gap: 20px;
a {
border-bottom: 3px solid transparent;
&:hover {
transition: 0.2s ease-in;
}
}
}
.active {
border-bottom: 3px solid #f3dc11;
}
li {
font-size: 1.6rem;
display: flex;
gap: 10px;
color: white;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem 0;
transition: 0.2s ease-in;



.icon {
font-size: 2rem;
}
}
}
`;
const Logo = styled.div`
img {
height: auto;
width: 50px;
}
`;
const routes = [
  {
    route: "/",
    name: "Home",
    icon: <FaHome className="icon" />,
    exact: true,
  },
  {
    route: "/CompanyDashboard/CompanyProfile",
    name: "Check Profile",
    icon: <FaUser className="icon" />,
  },
  // {
  //   route: "/CompanyDashboard/JobPost",
  //   name: "Order Book",
  //   icon: <BiCategory className="icon" />,
  //   onclick
  // },
  // {
  //   route: "/ApplyJob/BuyNow/Cart",
  //   name: "Job Post",
  //   icon: <BiCategory className="icon" />,
  //   onclick
  // },
  {
    route: "/CompanyDashboard/CompanyContact_us",
    name: "Submit Query",
    icon: <FaUser className="icon" />,
  },
];

