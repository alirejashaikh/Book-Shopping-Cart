import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import swal from "sweetalert";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
html
  {
    height:100%;
  }
 body
  {
     font-faimly : Arial,Helvetica,sans-serif;
     background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
     height:100%;
     margin:0;
     color:#;
     font-weight:bold;

  }

`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0px 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0px 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background: linear-gradient(
    90deg,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  h2 {
    text-align: center;
    color: yellow;
    font-weight: bold;
  }
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #000;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #0d0d94;
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  height: 40px;
  padding: 0px 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledError = styled.div`
  color: #2dd9fd;
  font-weight: 800;
  margin: 0px 0px 40px 0px;
`;

const initialState = {
  name: "",
  email: "",
  message: "",
};

function CompanyContact_us(props) {
  const [state, setstate] = useState(initialState);
  const [error, setError] = useState("");
  const [data, setdata] = useState({ CompanyName:'', Email:'', Message:'' })  
  const apiUrl = "http://localhost:62018/api/Query/CompanyQuery";  
  const QueryPost = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { CompanyName: data.CompanyName, Email: data.Email, Message: data.Message};  
    
    
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger; 
        console.log(result.data); 
        //const token = localStorage.setItem('token',result.data); 
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/CompanyDashboard/Company_dashboard')  
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  



  {
    /* For Handle the Output */
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    for (let key in state) {
      if (state[key] === "") {
        setError(`You must provide the ${key}`);
        return;
      }
    }

    swal({
      title: "Thank You",
      text: "You have Succuessfully submitted the form",
      icon: "success",
      button: "OK",
    });

    setError(``);

    const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const test = regx.test(state.email);
    console.log(test);

    // setstate({ name: "", email: "", message: "" });
  };

  {
    /* For Handle the input */
  }

  // const handleInput = (e) => {
  //   const inpuName = e.currentTarget.name;
  //   const value = e.currentTarget.value;
  //   setstate((prev) => ({ ...prev, [inpuName]: value }));
  // };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={QueryPost}>
          <h2>Contact Us</h2>

          {/* For Name */}

          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="CompanyName"
            value={state.name}
            value={data.CompanyName}
            onChange={onChange}
          />
          {/* For Email */}
          <label htmlFor="Email">Email</label>
          <StyledInput
            type="email"
            name="Email"
            value={data.Email}
            onChange={onChange}
          />
          {/* For Message */}
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="Message"
            value={state.message}
            value={data.Message}
            onChange={onChange}
          />

          {/* For Error Message */}

          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}

          <StyledButton type="Submit" >Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default CompanyContact_us;