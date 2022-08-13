import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Dashboard() {
    
  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/');
}
    const [data, setData] = useState([]);
    const baseUrl = "http://localhost:62018/api/Account/Get"

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

        <div className="col main pt-5 mt-3">
            <div>
                <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                    <div className="flex-row d-flex">
                        <div className="navbar-brand" href="#" title="Free Bootstrap 4 Admin Template">Welcome Admin </div>
                        <button onClick={Logout}>Logout</button>

                    </div>

                </nav>

            </div>
            <div className="row mb-3">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                            <div className="rotate">
                                <div className="fa fa-user fa-4x"></div>
                            </div>
                            <h6 className="text-uppercase">Total Users</h6>
                            <h1 className="display-4">134</h1>
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
                            <h1 className="display-4">87</h1>
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
                           
                            <div className="btn1">
                                <center><button className="btn btn-danger" onClick={()=>{
                                        navigate("/Admin/UserQuery");
                                    }}>User Query</button></center>
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
                           
                            <button className="btn btn-danger" onClick={()=>{
                                        navigate("/Admin/CompanyQuery");
                                    }}>Company Query</button>
                        </div>
                    </div>
                </div>
            </div>

            <hr />



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
                                    <th>FullName</th>
                                    <th>Email</th>
                                    <th>username</th>
                                    <th>Date of Birth</th>
                                    <th>Highest Qualification</th>
                                    <th>Designation</th>
                                    <th>Experience</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.slice(25,30).map((output) =>
                                    <tr>
                                        <td>{output.Id}</td>
                                        <td>{output.FullName}</td>
                                        <td>{output.Email}</td>
                                        <td>{output.username}</td>
                                        <td>{output.Date_Of_Birth}</td>
                                        <td>{output.Highest_qualification}</td>
                                        <td>{output.Designation}</td>
                                        <td>{output.Experience}</td>
                                        <td></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


            <a id="more"></a>
            <hr />
            <center><h2 class="sub-header mt-6"> OUR PARTNERS </h2></center>

            <div className="mb-6">
                <div className="card-deck">
                    <div className="card card-inverse card-success text-center">
                        <div className="card-body">

                            <marquee>
                                <marquee speed={100} />
                                <img src="https://www.cognizant.com/content/dam/cognizant/en_us/dotcom/logos/strategic-partner-logo-aws.svg" alt="slider" />

                            </marquee>



                        </div>
                    </div>
                    <div className="card card-inverse card-danger text-center">
                        <div className="card-body">
                            <marquee>
                                <marquee speed={100} />
                                <img src="https://www.cognizant.com/content/dam/cognizant/en_us/dotcom/logos/strategic-partner-logo-cisco.svg" alt="slider" />

                            </marquee>

                        </div>
                    </div>
                    <div className="card card-inverse card-warning text-center">
                        <div className="card-body form-group-row">
                            {/* <marquee>
                                <marquee speed={1000} />
                                <img src="https://www.cognizant.com/content/dam/cognizant/en_us/dotcom/logos/redhat-partner-logo.svg" alt="slider" />

                            </marquee> */}
                        </div>
                    </div>
                    <div className="card card-inverse card-info text-center">
                        <div className="card-body row-1">
                            {/* <marquee>
                                <marquee speed={1000} />
                                <img src="https://www.cognizant.com/content/dam/cognizant/en_us/dotcom/logos/strategic-partner-logo-finastra.svg" alt="slider" />

                            </marquee> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Dashboard