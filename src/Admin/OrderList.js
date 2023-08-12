import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Component/Sidebar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function OrderList() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      const { data } = await axios.get(`http://localhost:3030/order`);
      setOrder(data);
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
            <th>price</th>
            <th>quantity</th>
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
