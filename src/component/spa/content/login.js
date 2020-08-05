import React from 'react';
import { Link } from "react-router-dom";

class Login extends React.Component {

    render() { 
        return ( 
            <div style={{margin:' 10px 10px 10px'}}>
                <form style={{width:'100px'},{padding:'100px 550px'}}>
                    <fieldset>
                    <center>
                <h2 style={{padding:'40px'}}>Login</h2>
                <input type="text" placeholder="User Name" style={{margin:'15px'}}></input><br></br>
                <input type="password"class="pwd" placeholder="Password" style={{margin:'15px'}}></input><br></br>
                <input type="checkbox" checked = "checked"style={{margin:'15px'}}/>Remember me
                <Link to="/"style={{padding:'0px 20px'}} >Forgot Password ?</Link><br></br>
         <button type="submit"style={{margin:'15px',color:'white',backgroundColor:'#339EFF '}}><Link to="/dashboard" style={{textDecoration:"none",color:"Black"}}>Login</Link></button><br></br>
         Don't have an account? <Link to="/createaccount">Create Account</Link><br></br>
         </center>
                    </fieldset>
                </form>
               
            </div>
         );
    }
}
 
export default Login;