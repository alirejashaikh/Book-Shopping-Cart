import style from './CompanyForm.module.css'
import CompanyFormInput from './CompanyFormInput'
import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CompanyForm = () => {

const navigate = useNavigate();
  
  const [data, setdata] = useState({ FullName: '', City: '', PinCode: '', ContactPerson: '', Type: '',  Detail: '', Address: '', UserName: '', Email: '', Password: '' })  
  const apiUrl = "http://localhost:62018/api/Company/CompanySignupPost";
  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = {FullName:data.FullName, Ciy:data.City, PinCode:data.PinCode, ContactPerson:data.ContactPerson, Type:data.Type, Detail:data.Detail, Address:data.Address, UserName:data.UserName, Email: data.Email, Password: data.Password };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
          navigate('/Login/Login2')  
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
      name: "CompanyName",
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
  
      // emailRegEx: '^[a-z0-9._%+-]+@[a-z.-]+\\.[com]$'
    },
    {
      id: 3,
      name: "Address",
      type: "text",
      placeholder: "Address",
      label: "Address",
    },
    {
      id: 4,
      name: "City",
      type: "text",
      placeholder: "City",
      label: "City",
    },
    {
      id: 5,
      name: "Pincode",
      type: "number",
      placeholder: "Pincode",
      label: "Pincode",
    },
    {
      id: 6,
      name: "ContactPerson",
      type: "text",
      placeholder: "Mobile Number",
      label: "Mobile Number",
    },
    // {
    //   id:7,
    //   name: "Type",
    //   type: "text",
    //   placeholder: "Type",
    //   label: "Type"
    // },
    // {
    //   id:8,
    //   name: "Detail",
    //   type: "text",
    //   placeholder: "Detail",
    //   label: "Detail"
    // },
    {
      id: 9,
      name: "UserName",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 10,
      name: "Password",
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
          <CompanyFormInput
            key={input.id}
            {...input}
            //value={values[input.name]}
            value={data.name}
            onChange={onChange}
          />
        ))}
         </div>
               <div className={style.btn_container}>
          <button type="submit" className='btn btn-danger'>Register</button>   Already have an account? <a href="#">Login Now</a>  
          </div>
      </form>

     
     
  );
};

export default CompanyForm;