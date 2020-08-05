import React from 'react';
import { Link } from "react-router-dom"

class SignIn extends React.Component {
    state = {  }
    render() { 
        return (
            <div style={{margin:' 10px 10px 20px'}}>
                <form  style={{width:'200px'},{ padding:'100px 550px'}}>
                    <fieldset>
                    <center>
                <h2 style={{padding:'10px'}}>New User</h2>
                <input type="text" placeholder="First Name" style={{margin:'15px'}}></input><br></br>
                <input type="text" placeholder="Last Name" style={{margin:'15px'}}></input><br></br>
                <input type="email" placeholder="Email Address" style={{margin:'15px'}}></input><br></br>
                <input type="pwd" placeholder="New Password" style={{margin:'15px'}}></input><br></br>
                <input type="pwd" placeholder="Confirm Password" style={{margin:'12px'}}></input><br></br>
                <input type="date" style={{margin:'15px'}}></input><br></br>
                <button type="submit" value="Create Account" style={{color:'white',backgroundColor:'#4CAF50'}}><Link to="/dashboard" style={{textDecoration:"none",color:"Black"}}>Create Account</Link></button>
                </center>
                    </fieldset>
                </form>
               
            </div>
          );
    }
}
 
export default SignIn;