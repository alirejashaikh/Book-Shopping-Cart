import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
//import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';

const Profile = ()=>{

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


    return (
        <>
            {data.map((record,index)=>{
                
                return(
                    
                    <>
                    <div className="card">
                        key={index}
                        
                        <div>{record.FullName}</div>
                        <div>{record.Email}</div>
                        <div>{record.Date_Of_Birth}</div>
                        <div>{record.Address}</div>
                    </div>
                    </>
                )
            })}
        

        </>
    )
}


export default Profile