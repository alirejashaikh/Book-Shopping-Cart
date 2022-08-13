import React,{useState} from "react";
//import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const CompanyLogin = () =>{
    const [data, setdata] = useState({UserName: '', Password: '' })  
    const apiUrl = "http://localhost:62018/api/Company/companyLoginPost";  
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();  
        debugger;  
        const data1 = {Username: data.UserName, Password: data.Password };  
        axios.post(apiUrl, data1)  
        .then((result) => {
            debugger;  
            console.log(result.data);  
            const token = localStorage.setItem('token',result.data);
            navigate('/CompanyDashboard/Company_dashboard');
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
    
        <div className="container px-4 py-5 mx-auto">
            <form onSubmit={login}>
                <div className="card card0">
                    <div className="d-flex flex-lg-row flex-column-reverse">
                        <div className="card card1">
                            <div className="row justify-content-center my-auto">
                                <div className="col-md-8 col-10 my-5">
                                    <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="./components/Login/images/login.png" /> </div>
                                    <h4 className="mb-5 text-center heading">We are Together !</h4>
                                    <h6 className="msg-info">Please login to your account</h6>
                                    <div className="form-group"> <label className="form-control-label text-muted" >Username</label> <input type="text" name="UserName" onChange={onChange} value={data.UserName} placeholder="username" className="form-control" /> </div>
                                    <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input type="password" name="Password" onChange={onChange} value={data.Password} placeholder="password" className="form-control" /> </div>
                                    <div className="row justify-content-center my-3 px-3"> <button className="btn-block btn-color">Login</button> </div>
                                    <div className="row justify-content-center my-2"> <a href="#"><small class="text-muted">Forgot Password?</small></a> </div>
                                </div>
                            </div>
                            <div className="bottom text-center mb-5">
                                <p href="#" className="sm-text mx-auto mb-3">Don't have an account? <button type='submit' className="btn btn-white ml-2" onClick={()=>{
                                        navigate("/Registration/CompanySignup");
                                    }}>Register Now</button></p>
                            </div>
                        </div>
                        <div className="card card2">
                            <div className="my-auto mx-md-5 px-md-5 right">
                                <h3 className="text-white">We are more than just an Organization</h3> <small className="text-white">OES - Online Employment Service facilitate to get your dream job in reputed companies. It also shorten the hiring process with easy access.<br /><br />Keep motivated yourself all the time...<br />Have a wonderful Inspiring and Learning ahead !<br /><br />Best Wishes for great Career...!</small>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    
  );
};




export default CompanyLogin;