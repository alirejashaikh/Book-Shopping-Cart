import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
// import { Button } from 'semantic-ui-react'

function CompanyQuery(props) {
    const [data, setData] = useState([]);
    const baseUrl = "http://localhost:62018/api/Query/CompanyGet"

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
        const GetData = async () => {
            const result = await authAxios.get(baseUrl);
            setData(result.data);
        }
        GetData();

    }
        , [])


    return (
        <>
        
            
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
                
                <div className="container bg-primary">
                    

                    <div className="card mt-5  ">

                        {
                            data.map((item, idx) => {
                                return <tr key={idx}>
                                    <div className="form-group row ">

                                        <div className="card my-1 col-6 shadow mx-auto border-success px-3 py-3">

                                            <div className="form-group row">
                                                <div className="col-6"><label>Name: </label></div>
                                                <div className="col-6">{item.CompanyName}</div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-6"><label>Email: </label></div>
                                                <div className="col-6">{item.Email}</div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-6"><label>Message: </label></div>
                                                <div className="col-6">{item.Message}</div>
                                            </div>
                                           <div>
                                            <Link to="/Querymailer"><button className="btn btn-primary">Reply</button></Link>
                                        </div> 
                                        {/* <div>
                                            <Link to="/dashboard">
                                          <Button style={myStyle}>
                                        <p>Click Me!</p>
                                          </Button>
                                                </Link>
                                                </div> */}
                                            


                                           
                                        </div>
                                       
                                    </div>

                                </tr>
                            })
                        }



                    </div>








                </div>
            </div>
                
        

        </>
    )
}
export default CompanyQuery
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
    route: "/UserDashboard/MyProfile",
    name: "My Profile",
    icon: <FaUser className="icon" />,
  },
  {
    route: "/UserDashboard/ApplyJob",
    name: "View Transactions",
    icon: <BiCategory className="icon" />,
    
  },
  {
    route: "/UserDashboard/Contact_us",
    name: "Contact Us",
    icon: <FaUser className="icon" />,
  },
];

