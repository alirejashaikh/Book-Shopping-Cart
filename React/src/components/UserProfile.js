import React, {useState,useEffect} from 'react'
import axios from 'axios';
//import './Signup.css'
import { useNavigate } from "react-router-dom";


export default function CompanySignup(props) {
  const navigate = useNavigate();
 

    const { label, errorMessage,  id, ...inputProps } = props;
    const [focused, setFocused] = useState(false);
    const [data, setdata] = useState({ Name: '',  Location: '', UserName: '', Email: '', Qualification: '' })  
    const apiUrl = "http://localhost:62018/api/Account/UserProfilePost"; 
    

    const parseJwt=(token)=>{
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }


const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = {Name:data.Name, Location:data.Location, UserName:data.UserName, Email: data.Email, Qualification: data.Qualification };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
          navigate('/Login/CompanyLogin')  
      })  
  } 
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value }); 
    console.log(data)
  
  } 
  
   const handleFocus = (e) => {
     setFocused(true);
     };

    useEffect(()=>{
        const token = localStorage.getItem('token');
        const email = parseJwt(token).unique_name;
        console.log(email)
        data.Email = email
    })

  return (
    <div className='upper'>
        <form onSubmit={Registration}>
            <h2 className="heading">Create an Account</h2>

            <div className='formInput'>
                <label>Name</label>
                <input id='1' name='Name' type='text'  onChange={onChange} onBlur={handleFocus}  value={data.Name}  placeholder='Enter Your Company Name' errorMessage='Username should be 3-16 characters and shouldnt include any special character!'/>
            </div>
            {/* <div className='formInput'>
                <label hidden>Email</label>
                <input id='2' name='Email' type='email'  onChange={onChange} onBlur={handleFocus} value={data.Email} placeholder='Enter Your Email' errorMessage='It should be a valid email address!' hidden/>
            </div> */}
            <div className='formInput'>
                <label>Location</label>
                <input id='3' name='Location' type='text'  onChange={onChange} onBlur={handleFocus} value={data.Location} placeholder='Location' />
            </div>
            
            <div className='formInput'>
                <label>username</label>
                <input id='4' name='UserName' type='text'  onChange={onChange} onBlur={handleFocus} value={data.UserName} placeholder='Username' errorMessage='Username should be 3-16 characters and should not include any special character!'  />
            </div>
            <div className='formInput'>
                <label>Qualification</label>
                <input id='4' name='Qualification' type='text'  onChange={onChange} onBlur={handleFocus} value={data.Qualification} placeholder='Username' errorMessage='Username should be 3-16 characters and should not include any special character!'  />
            </div>
            
            
            
                <button type='submit' className='btn btn-success' >Register</button> Already have an account? <a href="#">Login Now</a>
            


        </form>

    </div>
  )
}
