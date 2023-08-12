import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import { Button } from "@mui/material";
import axios from "axios";

function UploadProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3030/product`, {
        productName,
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
        }}
      >
        <form onSubmit={handleSubmit} method="POST">
          <label for="username">Product name</label>
          <input
            type="text"
            name="productName"
            onChange={(e) => setProductName(e.target.value)}
          />
          <label for="username">Price</label>
          <input
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label for="image">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Button type="submit">upload</Button>
          
        </form>
      </div>
    </div>
  );
}

export default UploadProduct;
