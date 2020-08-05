import React from 'react';
import Sidebar from './sidebar';
import Img from "./chart.jpg"
class Dashboard extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Sidebar></Sidebar>
                <center>
					<img style={{padding:'10px 0px 50px 120px'}} src= {Img} alt="pic" />
					
				</center>
            </div>
         );
    }
}
 
export default Dashboard;