import logo from './logo.svg';
import './App.css';
import App from './App';
import mainlogo from './image/mainlogo.png';
import Users from "./Card";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
   
  <div className="container-fluid">
     <NavLink className="navbar-brand" to="/" style={{color: "white"}}>
     Lets Grow More
     </NavLink>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <NavLink className="nav-link active" aria-current="page" to="/app" style={{color: "white"}} >Get Users</NavLink>
         </li>
     </ul>    
     </div>
   </div>
 </nav>
       <center><h1>Welcome to Lets Grow More</h1>
       <h5>by Bhavana Madas</h5></center>
   </>
  );
}

export default Navbar;
