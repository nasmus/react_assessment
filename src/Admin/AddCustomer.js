import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddCustomer() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:3030/users", {
      name,
      phone,
      password,
      isAdmin: false,
    });
    navigate("/admin/customer");
  };
  return <div>
    <form onSubmit={submitHandle} method="POST">
        <label for="username">Phone Number</label>
        <input type="text" name="phone" onChange={(e) => setPhone(e.target.value)}  />
        <label for="username" >name</label>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        <label for="password" >Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" />
        <Button type="submit" >upload</Button>
      </form>
  </div>;
}

export default AddCustomer;
