import React, { useState,useEffect } from "react";
import Sidebar from "../Component/Sidebar";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState(null);

  //checking admis user information 
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('userInfo'))
    if(!item){
      navigate('/login')
    }
  },[navigate])

  //upload product data in server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://my-json-server.typicode.com/nasmus/json_server/product`, {
        name,
        image,
        price

      });
      alert("product upload successfully");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <Sidebar />
      
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop:'50px',
          flexDirection:'column'
        }}
      >
        <h2 style={{paddingBottom:"20px"}} >Product Upload</h2>
        <form onSubmit={handleSubmit} method="POST">
          <div>
          <label for="username">Product name</label>
          <input
            type="text"
            name="productName"
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div>
          <label for="username">Price</label>
          <input
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          </div>
          <div>
          <label for="image">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          </div>
          
          <Button type="submit">upload</Button>
          
        </form>
      </div>
    </div>
  );
}

export default UploadProduct;
