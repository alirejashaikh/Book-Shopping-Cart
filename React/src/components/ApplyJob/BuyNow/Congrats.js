import React from "react";
import { useNavigate } from "react-router-dom";
import './Congrats.css';



function Congrats() {
    const navigate = useNavigate();
    return (

        <div className="container">
            <center className='main bg-primary'>
            <div className='card-container'>
                <div className='image-container'>
                    <img src='./image/tick.jpg' alt='' />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h3>Congratulations</h3>
                    </div>



                    <br /><br />



                    <div className="card-body">
                        <p>You have successfully purchased the Subscription!</p>
                    </div>
                </div>



                <br /><br />



                <div className="btn">
                    <button onClick={()=>{
                                        navigate("/CompanyDashboard/JobPost");
                                    }}>Continue
                       
                    </button>
                </div>
            </div>
        </center>
        </div>

    )
}



export default Congrats;