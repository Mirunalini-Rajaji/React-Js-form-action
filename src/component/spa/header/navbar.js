import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  
    
    render() { 
        const navitem = {
            
            float:'right',
            display:'inline',
            padding:'0px 15px ',
           
            
            
            
        }
        return ( 
            <span>
                 <h2>Alendra</h2>
                  <ul style={{listStyleType:'none'} }>
                 
                  <li style={navitem}>
                        <Link to="/contactUs" style={{ textDecoration:'none'}}>Contact Us</Link>
                    </li>
                    <li style={navitem}>
                        <Link to="/createaccount" style={{ textDecoration:'none'}}>SignIn</Link>
                    </li>
                    <li style={navitem} >
                        <Link to="/" style={{ textDecoration:'none'}}>Login</Link>
                    </li>
                    <li style={navitem}>
                       <input type="text"/><button type="submit">Search</button>
                    </li>
                   
                   
                   
                </ul>
            </span>
         );
    }
}
 
export default Navbar;