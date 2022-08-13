import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Companies() {
    const [data, setData] = useState([]);
    const baseUrl = "http://localhost:62018/api/Company/Get"

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
        const GetData = async () => {
            const result = await authAxios.get(baseUrl);
            setData(result.data);
        }
        GetData();

    }
        , [])


  return (
    <div col main pt-5 mt-3>

        <div>
                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                    <div className="flex-row d-flex">
                        <div className="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Welcome Admin </div>

                    </div>

                </nav>

        </div>

        <div className="row mb-3 mt-5">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                            <div className="rotate">
                                <div className="fa fa-user fa-4x"></div>
                            </div>
                            <h6 className="text-uppercase">Total Users</h6>
                            
                            <button className="btn btn-danger" onClick={()=>{
                                        navigate("/Admin/Dashboard");
                                    }}>Check Users</button>

                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <div className="fa fa-building fa-4x"></div>
                            </div>
                            <h6 className="text-uppercase">Total Companies</h6>
                            
                            <button className="btn btn-danger" onClick={()=>{
                                        navigate("/Admin/Companies");
                                    }}>Check Companies</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <div className=" fa fa-comments fa-4x" ></div>
                            </div>
                            <div className="text-uppercase">user query</div>
                            <h1 className="display-4">125</h1>
                            <div className="btn1">
                                <center><button type="button" class="btn btn-info" onClick={() => { navigate("/Admin/UserQuery"); }}>Check Query</button></center>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <div className="fa fa-comments fa-4x "></div>
                            </div>
                            <h6 className="text-uppercase"> Company QUERIES</h6>
                            <h1 className="display-4">36</h1>
                            <center><button type="button" class="btn btn-info" onClick={() => { navigate("/Admin/CompanyQuery"); }}>Check Query</button></center>
                        </div>
                    </div>
                </div>
        </div>
        

        <div className="row ">
                <div className="col-lg-14 col-md-12 col-sm-12">
                    <h5 className="mt-3 mb-3 text-secondary">
                        New Registered User Records
                    </h5>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th>Id</th>
                                    <th>CompanyName</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Pincode</th>
                                    <th>Contact Person</th>
                                    <th>Type</th>
                                    <th>Detail</th>
                                    <th>username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.slice(1,5).map((output) =>
                                    <tr>
                                        <td>{output.Id}</td>
                                        <td>{output.CompanyName}</td>
                                        <td>{output.Email}</td>
                                        <td>{output.Address}</td>
                                        <td>{output.City}</td>
                                        <td>{output.Pincode}</td>
                                        <td>{output.ContactPerson}</td>
                                        <td>{output.Type}</td>
                                        <td>{output.Detail}</td>
                                        <td>{output.UserName}</td>
                                        <td></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

        </div>

    </div>
  )
}
export default Companies
