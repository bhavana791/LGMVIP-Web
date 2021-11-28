import Users from "./Card";
import './App.css';

import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
	
class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :[],
                loading : true                
  }
  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
      // document.getElementById("main").style.display='flex';
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
    {this.updateState()}
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
           <NavLink className="nav-link active" aria-current="page" to="/app" style={{color: "white"}} onClick={this.updateState}>Get Users</NavLink>
         </li>
     </ul>    
     </div>
   </div>
 </nav>
        <div className="box2">
         <Users loading={this.state.loading} users={this.state.users_data}/>
         </div>
    </>
    )
  }
}
	
export default App;