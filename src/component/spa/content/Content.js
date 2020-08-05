import React from 'react';
import { Switch, Route } from "react-router-dom";

import ForgotPwd from "./forgotpwd";
import SignIn from './signIn';
import Login from './login';
import Dashboard from './dashboard';
import Product from './product';
import AddProduct from './addproduct';


class Content extends React.Component {
    
    render() { 
        return ( 
            <div>
            <Switch>
                 <Route exact path='/' component={Login}></Route>
                <Route  exact path='/' component={ForgotPwd}></Route>
                <Route   path='/createaccount' component={SignIn}></Route>
                {/* <Route  exact path='/' component={Logout}></Route> */}
                <Route   path='/dashboard' component={Dashboard}></Route>
                <Route   path='/products' component={Product}></Route>
                <Route path="/addproduct" component={AddProduct}></Route>
              
                
            </Switch>
            </div>
         );
    }
}
 
export default Content;