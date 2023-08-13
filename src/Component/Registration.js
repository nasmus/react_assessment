import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    if (!phone.startsWith("+880")) {
      setError(
        "Please enter a valid Bangladeshi phone number (starting with +880)"
      );
      return;
    }
    // data sent to server
    const { data } = await axios.post("https://my-json-server.typicode.com/nasmus/json_server/users", {
      name,
      phone,
      password,
      isAdmin: false,
    });
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "60px",
        }}
      >
        <h1 style={{ paddingBottom: "40px" }}>Registration From</h1>
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
          <Button variant="contained" type="submit">
            Upload Product
          </Button>
          {error && <p>{error}</p>}
        </form>
        
      </div>
    </div>
  );
}

export default Registration;
