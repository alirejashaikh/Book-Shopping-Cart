import './Login1.css'
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login2() {
    const [data, setdata] = useState({username: '', password: '' })  
    const apiUrl = "http://localhost:62018/api/Company/CompanyLoginPost";  
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();  
        debugger;  
        const data1 = {username: data.username, Password: data.password };  
        axios.post(apiUrl, data1)  
        .then((result) => {
            debugger;  
            console.log(result.data);  
            const token = localStorage.setItem('token',result.data);
            navigate('/Admin/UserQuery');
        })
        .catch((res)=>{
        alert("username or password is wrong");
      })
  }
  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }


  return (
    <div>
        
        <section className="h-100 gradient-form" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                    <div className="row g-0">
                        <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">

                            <div className="text-center">
                            {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style="width: 185px;" alt="logo"> */}
                            <h4 className="mt-1 mb-5 pb-1">Book Shopping Cart</h4>
                            </div>

                            <form onSubmit={login}>
                            <p>Please login to your account</p>

                            <div className="form-outline mb-4">
                                <input type="text" id="form2Example11" className="form-control" onChange={onChange} name='username' value={data.username} placeholder="Phone number or email address"/>
                                <label className="form-label" for="form2Example11">Username</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="form2Example22" className="form-control" onChange={onChange} name='password' value={data.password} />
                                <label className="form-label" for="form2Example22">Password</label>
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in</button>
                                
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <p className="mb-0 me-2">Don't have an account?</p>
                                <button type="button" className="btn btn-outline-danger" onClick={()=>{
                                        navigate("/Signup/CompanySignup/CompanyForm");
                                    }}>Create new</button>
                            </div>

                            </form>

                        </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">Book Shopping Cart</h4>
                            <p className="small mb-0">Fill in your login details.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        
        
        
    </div>
  )
}
export default Login2
