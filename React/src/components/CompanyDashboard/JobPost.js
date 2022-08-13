import React, { useState } from 'react'  
import axios from 'axios';
import {Link, useNavigate, BrowserRouter, Route } from 'react-router-dom';
import './JobPost.css';

function Job_Post(props) {  

  const [data, setdata] = useState({ Job_Id:'', Job_Title:'', No_Of_Openings:'', Salary:'', Job_Location:'', Job_Description:'', Job_Timing:'', Interview_Details:'', Company_Name:'', Contact_Person_Name:'', Phone_Number:'', Email:'', Job_Address:'' })  
  const apiUrl = "http://localhost:62018/api/Job_Data";  
  const Jb_Post = (e) => {
    e.preventDefault();  
    debugger;  
    const data1 = { Job_Id: data.Job_Id, Job_Title: data.Job_Title, No_Of_Openings: data.No_Of_Openings, Salary: data.Salary, Job_Location: data.Job_Location, Job_Description: data.Job_Description, Job_Timing: data.Job_Timing, Interview_Details: data.Interview_Details, Company_Name: data.Company_Name, Contact_Person_Name: data.Contact_Person_Name, Phone_Number: data.Phone_Number, Email: data.Email, Job_Address: data.Job_Address };  
    
    // const token = localStorage.getItem('token')
    // const authAxios = axios.create({
    //     baseURL:apiUrl,
    //     headers:{
    //         Authorization:`Bearer ${token} `
    //     }
    // })
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger; 
        console.log(result.data); 
        // const token = localStorage.setItem('token',result.data); 
        if (result.data.Status == 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/Dashboard')  
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div class="container">
      <div className = "row p-2">
        {/* <img src={img1} alt="Logo"  height={200}/>  */}
      </div>  
      
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4">Fill Your Details</h1>  
                </div>  
                <form onSubmit={Jb_Post} class="user">  
                  <div class="form-group row my-1">
                    <div className='row card10'>
                      <label>Customer Name*</label>  
                      <div class="col-sm-6">  
                        <input type="text" name="Job_Title" onChange={onChange} value={data.Job_Title} class="form-control" id="exampleJob_Title" placeholder="Enter Your Name" />  
                      </div>


                      <div class="form-group row">  
                        {/* <div class="col-sm-6 mb-3 mb-sm-0">  
                          <input type="number" name="Salary" onChange={onChange} value={data.Salary} class="form-control" id="exampleSalary" placeholder="Enter Bill Amount" />  
                        </div>   */}
                        {/* <div class="col-sm-6">  
                          <input type="text" name="Job_Location" onChange={onChange} value={data.Job_Location} class="form-control" id="exampleJob_Location" placeholder="Enter Service Charge" />  
                        </div> */}
                      </div>
                    </div>


                    <div className='row card10 my-1'>
                      
                      <label>Address*</label>
                      <div class="col-sm-6">  
                        <input type="text" name="Company_Name" onChange={onChange} value={data.Company_Name} class="form-control" id="exampleCompany_Name" placeholder="Enter Your Full Address" />  
                      </div>

                      <label>Phone number*</label> 
                      <div class="col-sm-6">  
                        <input type="number" name="Phone_Number" onChange={onChange} value={data.Phone_Number} class="form-control" id="examplePhone_Number" placeholder="Enter Phone Number" />  
                      </div>
                      <label>Email*</label>
                      <div class="col-sm-6">  
                        <input type="email" name="Email" onChange={onChange} value={data.Email} class="form-control" id="exampleEmail" placeholder="Enter Email" />  
                      </div>
                      <label>Pin Code*</label>
                      <div class="col-sm-6">  
                        <input type="text" name="Job_Address" onChange={onChange} value={data.Job_Address} class="form-control" id="exampleJob_Address" placeholder="Pin Code" />  
                      </div>
                    </div>
                  </div>  

                    {/* <Link to="/UserDashboard/ApplyJob">
                 </Link> */}
                 
                 <button  type="submit" class="btn btn-primary  btn-block">  
                      Add Your Details  
                    </button>  <br></br>
                    
                    <br></br>
                    <Link to="/UserDashboard/ApplyJob">
                 <button  type="submit" class="btn btn-primary  btn-block">  
                      View Order  
                    </button>  </Link>
                </form>  
                 
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Job_Post