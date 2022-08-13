import styled from "styled-components";
import { FaHome, FaUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";
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
route: "/profile",
name: "My Profile",
icon: <FaUser className="icon" />,
},
{
route: "/job-category",
name: "Job Category",
icon: <BiCategory className="icon" />,
},
{
route: "/contact",
name: "Contact Us",
icon: <FaUser className="icon" />,
},
];



const Naviagation = () => {
return (
<Header>
<Nav>
<Logo>
<img src="/images/logo.jpg" alt="logo" />
</Logo>
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
);
};



export default Naviagation;

