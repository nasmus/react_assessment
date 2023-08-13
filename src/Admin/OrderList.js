import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Component/Sidebar";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function OrderList() {
  const navigate = useNavigate()
  const [order, setOrder] = useState([]);

  //checking admis user information 
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('userInfo'))
    if(!item){
      navigate('/login')
    }
  },[navigate])

  //Order list
  useEffect(() => {
    const fatchData = async () => {
      const { data } = await axios.get(`https://my-json-server.typicode.com/nasmus/json_server/order`);
      setOrder(data);
    };
    fatchData();
  }, []);
  return (
    <div>
      <Sidebar />
      <h1 style={{display: "flex", justifyContent: "center"}} >Order List</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <tr>
            <th style={{padding:'5px'}}><h1>ID</h1></th>
            <th style={{padding:'5px'}}><h1>Name</h1></th>
            <th style={{padding:'5px'}}><h1>price</h1></th>
            <th style={{padding:'5px'}}><h1>quantity</h1></th>
          </tr>
          {order.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <Button>
                  <Link to={`/admin/orderdetails/${item.id}`}>view Details</Link>
                </Button>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default OrderList;
