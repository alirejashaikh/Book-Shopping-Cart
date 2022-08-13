
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
//import Signup from './components/Registration/Signup.js';
import Company_dashboard from './components/CompanyDashboard/Company_dashboard.js';
import Price from './components/ApplyJob/Price.js';

import Cart from './components/ApplyJob/BuyNow/Cart.js';
import Congrats from './components/ApplyJob/BuyNow/Congrats.js';
//import CompanySignup from './components/Registration/CompanySignup.js';
 import CompanyLogin from './components/Login/CompanyLogin';
 import UserProfile from './components/UserProfile.js';
 import GetUserProfile from './components/GetUserProfile.js';
import UserDashboard from './components/UserDashboard/UserDashboard.js';
 //import MyProfile from './components/UserDashboard/MyProfile/MyProfile.js';
import Login1 from './components/Login/Login1.js';

import Dashboard from './components/Admin/Dashboard.js';
import Form from './components/Signup/Form.js';
//import Profile from './components/CompanyDashboard/CompanyProfile.js';
import Login2 from './components/Login/Login2.js';
 import MyProfile from './components/UserDashboard/MyProfile.js';
 
import CompanyForm from './components/Signup/CompanySignup/CompanyForm.js';
import Contact_us from './components/UserDashboard/Contact_us.js';
import CompanyContact_us from './components/CompanyDashboard/CompanyContact_us.js';
import Job_Post from './components/CompanyDashboard/JobPost.js';
import EntryPoint from './components/EntryPoint.js/EntryPoint.js';
import Profile from './components/UserDashboard/MyProfile/MyProfile.js';
import CompanyProfile from './components/CompanyDashboard/CompanyProfile.js';
import ApplyJob from './components/UserDashboard/ApplyJob.js';
import AdminLogin from './components/Admin/AdminLogin.js';
import Companies from './components/Admin/Companies.js';
import UserQuery from './components/Admin/UserQuery.js';
import CompanyQuery from './components/Admin/CompanyQuery.js';
import Mailer from './components/Mailer.js'
import QueryMailer from './components/Querymailer'

function App() {
  return (
    <div>
      <Router>
      <Routes>
        
         <Route exact path='/' element={<EntryPoint/>}/>
          <Route path='/Login/Login1' element={<Login1/>}/>
         <Route path='/Login/Login2' element={<Login2/>}/> 
        
          <Route path='/CompanyDashboard/company_dashboard' element={<Company_dashboard/>}/> 
          <Route path='/ApplyJob/BuyNow/Cart' element={<Cart/>}/> 
          <Route path='/ApplyJob/BuyNow/Congrats' element={<Congrats/>}/> 
          <Route path='/UserDashboard/UserDashboard' element={<UserDashboard/>}/> 
          
          <Route path='/Admin/Dashboard' element={<Dashboard/>}/> 
          <Route path='/Signup/Form' element={<Form/>}/> 
          
          <Route path='/UserDashboard/MyProfile' element={<MyProfile/>}/> 
          <Route path='/Signup/Form' element={<Form/>}/>
          <Route path='/Signup/CompanySignup/CompanyForm' element={<CompanyForm/>}/>
          <Route path='/UserDashboard/Contact_us' element={<Contact_us/>}/>
          <Route path='/CompanyDashboard/CompanyContact_us' element={<CompanyContact_us/>}/>
          <Route path='/CompanyDashboard/JobPost' element={<Job_Post/>}/>
          {/* <Route path='/UserDashboard/MyProfile/MyProfile' element={<Profile/>}/> */}
          <Route path='/CompanyDashboard/CompanyProfile' element={<CompanyProfile/>}/>
          <Route path='/UserDashboard/ApplyJob' element={<ApplyJob/>}/>
          <Route path='/Admin/AdminLogin' element={<AdminLogin/>}/>
          <Route path='Admin/Companies' element={<Companies/>}/>
          <Route path='Admin/UserQuery' element={<UserQuery/>}/>
          <Route path='Admin/CompanyQuery' element={<CompanyQuery/>}/>
          <Route path = "Mailer" element ={<Mailer/>}/>
          <Route path = "Querymailer" element ={<QueryMailer/>}/>
   
      </Routes>
      </Router> 
      
    </div>
    
  );
}

export default App;
