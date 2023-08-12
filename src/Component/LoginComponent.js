import React, { useState, useContext, useEffect } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";
import { Store } from "../Store";

function LoginComponent() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectUrl ? redirectUrl : "/";
  const { userInfo } = state;

  const submitHendler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3030/users", {
        phone,
        password,
      });
      console.log(data);
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {}
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <div>
      <Header />
      <form onSubmit={submitHendler} method="POST">
        <label for="username">Phone Number</label>
        <input
          type="text"
          name="username"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label for="password ">Password:</label>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" >add button</Button>
      </form>
      <p>not register yet</p>
      <div className="registration">
        <Link to="/registration">Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginComponent;
