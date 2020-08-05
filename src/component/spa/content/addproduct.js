import React from 'react';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

class AddProduct extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div style={{margin:' 10px 10px 10px'}}>
                <Sidebar></Sidebar>
                <form style={{width:'100px'},{padding:'100px 550px'}}>
                    <fieldset>
                    <center>
                <h2>Add Product</h2>
                <input type="text" placeholder="Product Name" style={{margin:'15px'}}></input><br></br>
                <input type="text" placeholder="Price" style={{margin:'15px'}}></input><br></br>
                <input type="text" placeholder="Brand" style={{margin:'15px'}}></input><br></br>
                <input type="text" placeholder="Category" style={{margin:'15px'}}></input><br></br>
                <input type="number" placeholder="Quantity" min="1" max="20" style={{margin:'10px'}}></input><br></br>
                <input type="checkbox" style={{margin:'15px'}}/>Available<br></br>
                <button type="submit" value="Add" style={{color:'white',backgroundColor:'#4CAF50'}}><Link to="/products" style={{textDecoration:"none",color:"Black"}}>Add</Link></button><br></br>
                </center>
                    </fieldset>
                </form>
               
            </div>
         );
    }
}
 
export default AddProduct;