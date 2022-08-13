import {useNavigate, NavLink} from "react-router-dom";
import style from './EntryPoint.module.css';

function EntryPoint() {
    const navigate=useNavigate();
  return (

    
    <>
    <div>

    <div className={style.body1}>
      
       
      <div className={style.pages1}>
      
     
        <nav className={style.navbar1}>
    <div className={style.nav_container1}>
        <NavLink exact to="/" className={style.nav_logo1}>
        Book Shopping Cart
        </NavLink>

        <div className={style.nav_menu1}>
        <div className={style.nav_item1}>

                <NavLink exact to="/home" className={style.nav_links1}>
                    Home
                </NavLink>
                <NavLink exact to="/Admin/UserQuery" className={style.nav_links1}>
                    View Books
                </NavLink>
                <NavLink exact to="/CompanyDashboard/CompanyContact_us" className={style.nav_links1}>
                    Contact Us
                </NavLink>
        </div>
       
              {/* <div className={style.nav_item1}>
                <NavLink exact to="/Admin/AdminLogin" className={style.nav_links1}>
                    Admin Login
                </NavLink>
                </div> */}
            </div>
         </div>
      </nav>
  </div>
  <div className={style.body2}>
      <center>
<h2>Book Shopping Cart</h2>
 <cite title="Source Title">Indias's Largest Book Ordering Portal</cite>
</center>

<center>


<div className={style.center_card_container}>
<div className={style.center_card}>
    <img src="https://cdn-icons-png.flaticon.com/512/1903/1903162.png" width="260" height="190"/>
    <h5 className="card-title">User</h5>
     <p style={{color: "black"}}>Login as User</p>
    <button onClick={()=>{
     navigate("/Login/Login2");
     }
     }>Login Now</button>
    </div>


    <div className={style.center_card}>
    <img src="https://cdn-icons-png.flaticon.com/512/7211/7211037.png" width="250" height="190"/>
       
    <h5 className="card-title" >Admin </h5>
      <p style={{color: "black"}}>Login as Admin</p>
      <button onClick={()=>{
           navigate("/Login/Login1");
           }
        }>Login Now</button>
    </div>
   
    </div>
   


</center>


</div>

  </div>
    </div>
    
     
    </>
     
  );
 
 
}
export default EntryPoint;