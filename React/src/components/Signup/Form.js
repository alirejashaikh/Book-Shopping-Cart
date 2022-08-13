import style from './Form.module.css'
import FormInput from "./FormInput";
import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {

const navigate = useNavigate();
  
  const [data, setdata] = useState({ FullName: '', Date_Of_Birth: '', HighestQualification: '', Designation: '', Experience: '', Address: '', username: '', Email: '', password: '' })  
  const apiUrl = "http://localhost:62018/api/Account/SignupPost";
  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = {FullName:data.FullName, Date_Of_Birth:data.Date_Of_Birth, HighestQualification:data.HighestQualification, Designation:data.Designation, Experience:data.Experience, Address:data.Address, username:data.username, Email: data.Email, Password: data.password };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
          navigate('/Login/Login1')  
      })  
  } 

  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }
  
  
  
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    dateofbirthday: "",
    highestqualification: "",
    designation: "",
    experience: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "FullName",
      type: "text",
      placeholder: "Enter your Full Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Full Name",
    },
    {
      id: 2,
      name: "Email",
      type: "email",
      placeholder: "Enter your Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "Date_Of_Birth",
      type: "date",
      placeholder: "Birthday",
      label: "Date Of Birthday",
    },
    {
      id: 4,
      name: "Highest_qualification",
      type: "text",
      placeholder: "Highest Qualification",
      label: "Education Level",
    },
    {
      id: 5,
      name: "Designation",
      type: "text",
      placeholder: "Designation",
      label: "Designation",
    },
    {
      id: 6,
      name: "Experience",
      type: "number",
      placeholder: "in years",
      label: "Experience",
    },
    {
      id:7,
      name: "Address",
      type: "text",
      placeholder: "Address",
      label: "Address"
    },
    {
      id: 8,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 9,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    // {
    //   id: 10,
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   errorMessage: "Passwords don't match!",
    //   label: "Confirm Password",
    //   pattern: values.password,
    //   required: true,
    // },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  

  return (

     
      <form className={style.form} onSubmit={Registration}>
        <h2 className={style.heading}>Create an Account</h2>
         <div className={style.form_grid}>

     
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            //value={values[input.name]}
            value={data.name}
            onChange={onChange}
          />
        ))}
         </div>
               <div className={style.btn_container}>
          <button type="submit" className='btn btn-success'>Register</button>   Already have an account? <a href="#">Login Now</a>  
          </div>
      </form>

     
     
  );
};

export default Form;