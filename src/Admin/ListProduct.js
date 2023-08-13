import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Component/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function ListProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  //checking admis user information 
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('userInfo'))
    if(!item){
      navigate('/login')
    }
  },[navigate])

  //Product list
  useEffect(() => {
    const fatchData = async () => {
      const { data } = await axios.get(`https://my-json-server.typicode.com/nasmus/json_server/product`);
      setProduct(data);
    };
    fatchData();
  }, []);
  return (
    <div>
      <Sidebar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {product.map((item,index) => (
            <tr key={index} >
              <td>{item.id}</td>
              <td>{item.name} </td>
              <td>{item.price}</td>
              <td>
                <Button> <Link to={`/productdetails/${item.id}`} > Product Details</Link></Button>{" "}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default ListProduct;
