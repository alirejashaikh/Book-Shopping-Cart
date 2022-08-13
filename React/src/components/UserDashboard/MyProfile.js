
import './prof.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
    
    const MyProfile = ()=>{
    
        const [data, setData] = useState([]);
        const parseJwt=(token)=>{
            if (!token) { return; }
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
        const baseUrl = "http://localhost:62018/api/Account/GetUserData/"
    
        const navigate = useNavigate();
    
        const token = localStorage.getItem('token')
        const authAxios = axios.create({
            baseURL: baseUrl,
            headers: {
                Authorization: `Bearer ${token} `
            }
        })
        const logout = () => {
            localStorage.removeItem('token');
            navigate('/');
        }
    
    
        useEffect(() => {
            const UserName = parseJwt(token).unique_name;
            const GetData = async () => {
                const result = await authAxios.get(baseUrl+UserName);
                setData(result.data);
                console.log(result.data)            
            }
            GetData();
            
            
    
        }
            , [])




    return(
        

        <>

        {data.map((record,index)=>{
            return(
                
                <>
                    <div className="container100">
                        <div className="row">
                            <div className="col-md-5 border-right">
                                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /></div>
                                <span className="font-weight-bold">Alica D'Souza</span><span className="text-black-50">alicadsouza@gmail.com</span><span> </span>
                            </div>
                            <div className="col-md-5 border-right">
                                <div className="p-3 py-5">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h4 className="prof">Profile Details</h4>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="main col-md-12"><label className="labels">Full Name        :  {record.FullName}     </label></div>
                                        <div className="main col-md-12"><label className="labels">Email ID         :  {record.Email}    </label></div>
                                       {/*  <div className="main col-md-12"><label className="labels">Date of Birth    :  {record.Date_Of_Birth}   </label></div> */}
                                        {/* <div className="main col-md-12"><label className="labels">Education Level  :  {record.Highest_Qualification}     </label></div> */}
                                        {/* <div className="main col-md-12"><label className="labels">Designation     :   {record.Designation}</label></div>
                                        <div className="main col-md-12"><label className="labels">Experience:      :  {record.Experience}</label></div> */}
                                        <div className="main col-md-12"><label className="labels">Address          :  {record.Address}   </label></div>
                                        <div className="main col-md-12"><label className="labels">Username         :  {record.username}  </label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
           
        </>
        
    )
}

export default MyProfile;