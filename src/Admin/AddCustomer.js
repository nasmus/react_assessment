import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

function AddCustomer() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  
  //checking admis user information 
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('userInfo'))
    if(!item.isAdmin){
      navigate('/login')
    }
  },[navigate])

  
  //add customer data sent to server
  const submitHandle = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("https://my-json-server.typicode.com/nasmus/json_server/users", {
      name,
      phone,
      password,
      isAdmin: false,
    });
    navigate("/admin/customer");
  };
  return (
    <div>
      <Sidebar />
      <h1 style={{display: "flex", justifyContent: "center",paddingBottom:'20px'}}>Add Customer</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
        
        <form onSubmit={submitHandle} method="POST">
          <div>
            <label for="username">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label for="username">name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label for="password">Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>
          <Button type="submit">upload</Button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomer;
