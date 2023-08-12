import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Component/Sidebar";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function ListProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      const { data } = await axios.get(`http://localhost:3030/product`);
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
