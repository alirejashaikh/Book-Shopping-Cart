// import React from "react"
// import emailjs from "emailjs-com";


// const Mailer = () => {
// function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_lehbkjc', 'template_kk1wvik', e.target, 'ANJwA606Zm53o4zs2')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
//   return(
//    <div classname="container border">
//     style={{marginTop:"50px",
//     width:'50%',
//     backgroundImage:`url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg")`,
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     }}
     
//   <h1 style={{marginTop:'25px'}}> Ticket Confirmation Mail </h1>
//   <form classname="row" style={{margin:"25px 85px 75px 100px"}}>
//   <label>name</label>
//   <input type='text' name='name'/>
//   <label> Email </label>
//   <input type='email' name='user_email' className="form-control"/>

//   <input 
//   type="submit"
//   value="send"
//   className="form-control btn btn-primary"
//   style={{marginTop:"30px"}}>
//   </input>
//   </form>
//   </div>
  
//   );
//   };
//   export default Mailer;

import React,{useState,useEffect} from "react"
// import { useNavigate } from 'react-router-dom';

import emailjs from "emailjs-com";


function LoginFormPatient() {
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [DriverSpecification, setDriverSpecification] = useState("");

    const [EmailErr, setEmailErr] = useState("");
    const [NameErr, setNameErr] = useState("");
    const [DriverSpecificationErr, setDriverSpecificationErr] = useState("");

    // const navigate = useNavigate();


    const formValidation = () => {
        const EmailErr = {};
        const NameErr = {};
        const DriverSpecificationErr = {};

        let isValid = true;

        if (!Email) {
            EmailErr.nullEmail = "Email id is required";
            isValid = false;
        }
        else if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(Email))) {
            EmailErr.invalidEmail = "Invalid EmailID";
            isValid = false;
        }
        if (!Name) {
            NameErr.nullN = "Name is required";
            isValid = false;
        }
        if (!DriverSpecification) {
            DriverSpecificationErr.nullDS = "Please choose DriverSpecification";
            isValid = false;
        }

        setEmailErr(EmailErr);
        setNameErr(NameErr);
        setDriverSpecificationErr(DriverSpecificationErr);

        return isValid;
    }
    function sendEmail(e) {
        const isValid = formValidation();
        if (isValid) {
          e.preventDefault();

          emailjs.sendForm('service_lehbkjc', 'template_kk1wvik', e.target, 'ANJwA606Zm53o4zs2')
            .then((result) => {
              alert("Successfully mail sent!");
            }, (error) => {
              alert("Successfully mail sent!");
            });
          e.target.reset()
        }
        else{
          alert("Kindly fill out the fields clearly!");
        }
    }
  return(
    <div id="helpform">
      <form onSubmit = {sendEmail} classname="row" style={{margin:"25px 85px 75px 100px"}}>
     
    <h2 style={{marginTop:'25px'}}> Order Confirmation Mail </h2>

    <div class = 'row' >
                  <label>Full Name</label>
                  <input type="text" className="form-control" name = "name" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" />
                  {Object.keys(NameErr).map((key) => {
                      return <div style={{ color: "red" }}>{NameErr[key]}</div>
                  })}
        </div>
        <div class = 'row'>
                  <label>EmailID</label>
                  <input type="email" className="form-control" name = "email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email ID" />
                  {Object.keys(EmailErr).map((key) => {
                      return <div style={{ color: "red" }}>{EmailErr[key]}</div>
                  })}
        </div>


 
        <div class = 'row'>
                    <label for = "spec" >Select Location Type:</label>
                  <select className="form-control" name="spec" id="spec" onChange={(e) => setDriverSpecification(e.target.value)} >
                        <option selected disabled hidden value="none">Select an Option</option>
                        <option value="Appointment">Office</option>
                        <option value="Appointment">Home</option>
                  </select>
                  {Object.keys(DriverSpecificationErr).map((key) => {
                      return <div style={{ color: "red" }}>{DriverSpecificationErr[key]}</div>
                  })}
                    </div>

        <div class = 'row' >
          <label>Destination Address</label>
          <textarea className="form-control" name = "issue" style = {{width: 380}} type="text" placeholder="Kindly Fill Your Address" />
        </div> 

        <div class = 'row' id = 'button'>
          <button className="form-control btn btn-primary"
       style={{marginTop:"30px"}} type="submit">Place Order</button>
        </div>
      </form>
    </div>
  )
}


//ReactDOM.render(<App />, document.getElementById('container'));
export default LoginFormPatient;