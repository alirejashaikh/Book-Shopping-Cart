import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

function UserQuery(props) {
    const [data, setData] = useState([]);
    const baseUrl = "http://localhost:62018/api/Query/UserGet"

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
        <div class="container">
            <div class="row">
                {data.map((item, idx) => (
                    <div class="col" key={idx} xs={12} md={4} lg={3}>
                        <div class="card">
                        <div className="form-group">
                                            <img src="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" width="260" height="190"/>
                                                <div className="col-6"><label>Book Name: </label></div>
                                                <div className="col-6">{item.Name}</div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-6"><label>Book Price: </label></div>
                                                <div className="col-6">{item.Email}</div>
                                            </div>

                                            <div className="form-group">
                                                <div className="col-6"><label>Book Description: </label></div>
                                                <div className="col-6">{item.Message}</div>
                                            </div>
                                            
                                            <div>
                                            <Link to="/CompanyDashboard/JobPost"><button className="btn btn-primary">Add to Cart</button></Link>
                                        </div>  
                        </div>
                    </div>
                ))}
            </div>
        </div>


                
                {/* <div className="container bg-primary">
       
                            <div class="card-group">
                        {

                            data.map((item, idx) => {
                                return <div class=" col-md-4 card " key={idx}>

                                    
                                        <div class="card-body">
                                        <h4 class="card-title">Order</h4>
                                        <img src="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" width="190" height="190" />
                                        <div class="card-text">
                                        <div><label>Book Name: </label></div>
                                        <div><label>Book Price: </label></div>
                                        <div><label>Book Description: </label></div>
                                        </div> 

                                        <Link to="/CompanyDashboard/JobPost"><button className="btn btn-primary">Order Book</button></Link>

                                        </div>

                                           
                                        </div>
                                       
                                

                               
                            })
                            
                        }
                        </div>
                        </div>

                        </div> */}
                    
                                    
                                   

{/* start */}
{/* <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <div className=" fa fa-comments fa-4x" ></div>
                            </div>
                            <div className="text-uppercase">Check Books</div>
                            <h1 className="display-4"></h1>
                            <div className="btn1">
                                <left><button className="btn btn-danger" onClick={()=>{
                                        navigate("/Admin/UserQuery");
                                    }}>Check Books</button></left>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <div className="fa fa-comments fa-4x "></div>
                            </div>
                            <h6 className="text-uppercase"> User Queries</h6>
                            <h1 className="display-4"></h1>
                            <button className="btn btn-danger" onClick={()=>{
                                        navigate("/Admin/CompanyQuery");
                                    }}>User Query</button>
                        </div>
                    </div>
                </div> */}


{/* end */}


                                        {/* <div className="card my-1 col-3 shadow mx-auto border-success px-3 py-3">

                                            <div className="form-group row">
                                            <img src="https://cdn-icons-png.flaticon.com/512/2436/2436636.png" width="260" height="190"/>
                                                <div className="col-6"><label>Book Name: </label></div>
                                                <div className="col-6">{item.Name}</div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-6"><label>Book Price: </label></div>
                                                <div className="col-6">{item.Email}</div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-6"><label>Book Description: </label></div>
                                                <div className="col-6">{item.Message}</div>
                                            </div>
                                            
                                            <div>
                                            <Link to="/CompanyDashboard/JobPost"><button className="btn btn-primary">Order Book</button></Link>
                                        </div>  */}

                                        


        </div>

      
    )
}

export default UserQuery
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
  // {
  //   route: "/UserDashboard/Contact_us",
  //   name: "Add Books",
  //   icon: <FaUser className="icon" />,
  // },
];

