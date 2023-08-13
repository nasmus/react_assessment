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
  const [isTrue, setIsTrue] = useState(true);
  const [error, setError] = useState("");
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectUrl ? redirectUrl : "/";
  const { userInfo } = state;

  const submitHendler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("https://my-json-server.typicode.com/nasmus/json_server/users");
      //check user login data
      const user = data.find(
        (us) => us.phone === phone && us.password === password
      );
      const admin = data.find(
        (ad) =>
          ad.phone === phone &&
          ad.password === password &&
          ad.isAdmin === isTrue
      );
      if (admin) {
        ctxDispatch({ type: "USER_SIGNIN", payload: user });
        localStorage.setItem("userInfo", JSON.stringify(user));
        navigate("/admin");
      } else if (user) {
        ctxDispatch({ type: "USER_SIGNIN", payload: user });
        localStorage.setItem("userInfo", JSON.stringify(user));
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
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
      <div style={{display:'flex',alignItems:'center', flexDirection:'column',paddingTop:"60px"}}>
        <form onSubmit={submitHendler} method="POST">
          <div>
            <label for="username">Phone Number</label>
            <input
              type="text"
              name="username"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label for="password ">Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button variant="contained" type="submit">Lon In</Button>
          {error && <p>{error}</p>}
        </form>
        <p>not register yet</p>
        <div className="registration">
          <Link to="/registration">Sign Up</Link>
        </div>
        <div style={{paddingTop:'50px'}}>
          <h3>user login id and pass :</h3>
          <p>id:01723456787</p>
          <p>pass:12345</p>
        </div>
        <div style={{paddingTop:'50px'}}>
          <h3>admin login id and pass :</h3>
          <p>id:01786456354</p>
          <p>pass:12345</p>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
