import React from 'react';
import Sidebar from './sidebar';
import { Link } from "react-router-dom";

class Product extends React.Component {
    state = {  }
    render() { 
        const table={
            padding:'40px',
    textAlign: 'center',
    margin:'10px',
    border: '2px solid black',
        }
        const content={
            border: '1px solid black',
            borderCollapse: 'collapse',
            maxWidth: '300px',
        }
        return ( 
            <div>
                <Sidebar></Sidebar>
                
                
                <center>
                <h3 style={{ margin:'50px'},{padding:'100px 0px 30px'}}><Link to="/addproduct">Add Products</Link></h3>
                <table style={table}>
                    <thead >
                        <tr>
                        <th style={content}>Image</th>
                        <th style={content}>Product Name</th>
                        <th style={content}>Price</th>
                        <th style={content}>Quantity</th>
                        <th style={content}>Category</th>
                        <th style={content}>Status</th>
                        <th style={content}>Options</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td style={content}><img alt="image1"></img></td>
                            <td style={content}>Nokia</td>
                            <td style={content}>20000</td>
                            <td style={content}>5</td>
                            <td style={content}>Mobile Phones</td>
                            <td style={content}>Available</td>
                            <td style={content}><button type="submit" style={{color:'white',backgroundColor:'#4CAF50'}}>Update</button>
                            <button type="submit" style={{color:'white',backgroundColor:'#d8350d'}}>Delete</button></td>
                        </tr>
                        <tr>
                            <td style={content}><img alt="image2"></img></td>
                            <td style={content}>JBL</td>
                            <td style={content}>2000</td>
                            <td style={content}>8</td>
                            <td style={content}>Ear Phones</td>
                            <td style={content}>Available</td>
                            <td style={content}><button type="submit" style={{color:'white',backgroundColor:'#4CAF50'}}>Update</button>
                            <button type="submit" style={{color:'white',backgroundColor:'#d8350d'}}>Delete</button></td>
                        </tr>
                        <tr>
                            <td style={content}><img alt="image3"></img></td>
                            <td style={content}>Shirt</td>
                            <td style={content}>1500</td>
                            <td style={content}>10</td>
                            <td style={content}>Clothes</td>
                            <td style={content}>Available</td>
                            <td style={content}><button type="submit" style={{color:'white',backgroundColor:'#4CAF50'}}>Update</button>
                            <button type="submit" style={{color:'white',backgroundColor:'#d8350d'}}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                </center>
            </div>
         );
    }
}
 
export default Product;