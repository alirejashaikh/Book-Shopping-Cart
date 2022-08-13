
import './prof.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
    
    const CompanyProfile = ()=>{
    
        const [data, setData] = useState([]);
        const parseJwt=(token)=>{
            if (!token) { return; }
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
        const baseUrl = "http://localhost:62018/api/Company/GetUserData/"
    
        const navigate = useNavigate();
    
        const token = localStorage.getItem('token')
        const authAxios = axios.create({
            baseURL: baseUrl,
            headers: {
                Authorization: `Bearer ${token} `
            }
        })
        const logout = () => {
            localStorage.removeItem('token');
            navigate('/');
        }
    
    
        useEffect(() => {
            const UserName = parseJwt(token).unique_name;
            const GetData = async () => {
                const result = await authAxios.get(baseUrl+UserName);
                setData(result.data);
                console.log(result.data)            
            }
            GetData();
            
            
    
        }
            , [])




    return(
        

        <>

        {data.map((record,index)=>{
            return(
                
                <>
                    <div className="container100">
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
            </ul>
          </Nav>
                        </Header>
                        </div>

                        <div className="row">
                            <div className="col-md-5 border-right">
                                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /></div>
                                <span className="font-weight-bold">Alica D'Souza</span><span className="text-black-50">alicadsouza@gmail.com</span><span> </span>
                            </div>
                            <div className="col-md-5 border-right">
                                <div className="p-3 py-5">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h4 className="prof">Profile Details</h4>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="main col-md-12"><label className="labels">Company Name        :  {record.CompanyName}     </label></div>
                                        <div className="main col-md-12"><label className="labels">Email ID            :  {record.Email}    </label></div>
                                        <div className="main col-md-12"><label className="labels">Address             :  {record.Address}   </label></div>
                                        <div className="main col-md-12"><label className="labels">City                :  {record.City}     </label></div>
                                        <div className="main col-md-12"><label className="labels">Pincode             :  {record.Pincode}</label></div>
                                        <div className="main col-md-12"><label className="labels">Contact Person:     :  {record.ContactPerson}</label></div>
                                        <div className="main col-md-12"><label className="labels">Type                :  {record.Type}   </label></div>
                                        <div className="main col-md-12"><label className="labels">Detail              :  {record.Detail}   </label></div>
                                        <div className="main col-md-12"><label className="labels">Username            :  {record.UserName}  </label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
           
        </>
        
    )
}

export default CompanyProfile;
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
    name: "Company Profile",
    icon: <FaUser className="icon" />,
  },
  // {
  //   route: "/CompanyDashboard/JobPost",
  //   name: "Add Bill",
  //   icon: <BiCategory className="icon" />,
  //   onclick
  // },
  {
    route: "/CompanyDashboard/CompanyContact_us",
    name: "Contact Us",
    icon: <FaUser className="icon" />,
  },
];