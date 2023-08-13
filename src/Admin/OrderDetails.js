import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Component/Sidebar";

function OrderDetails() {
  const navigate = useNavigate()
  const [orderDetails, setOrderDetails] = useState([]);
  const params = useParams();
  const { id } = params;

  //checking admis user information 
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('userInfo'))
    if(!item){
      navigate('/login')
    }
  },[navigate])

  // product get from api using order id
  useEffect(() => {
      const fatchData = async () => {
        const { data } = await axios.get(`https://my-json-server.typicode.com/nasmus/json_server/order/${id}`);
        setOrderDetails(data);
      };
    fatchData();
  }, [id]);
  return(
    <div className="orderDetails">
      <Sidebar />
        <div style={{display:'flex',justifyContent:'center'}}>
          <table>
          <tr>
            <th style={{padding:'5px'}}><h1>ID</h1></th>
            <th style={{padding:'5px'}}><h1>Name</h1></th>
            <th style={{padding:'5px'}}><h1>price</h1></th>
            <th style={{padding:'5px'}}><h1>quantity</h1></th>
          </tr>
          <tr >
                <td><h2>{orderDetails.id}</h2></td>
                <td><h2>{orderDetails.name}</h2> </td>
                <td>{orderDetails.price}</td>
                <td>{orderDetails.quantity}</td>
                
              </tr>
          </table>
            
        </div>
        
    </div>
  );
}

export default OrderDetails;
