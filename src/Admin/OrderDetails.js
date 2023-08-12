import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState([]);
  const params = useParams();
  const { id } = params;
  // product get from api using order id
  useEffect(() => {
      const fatchData = async () => {
        const { data } = await axios.get(`http://localhost:3030/order/${id}`);
        setOrderDetails(data);
      };
    fatchData();
  }, [id]);
  return(
    <div className="orderDetails">
        <div>
            <h2>{orderDetails.id}</h2>
            <h2>{orderDetails.name}</h2>
            <h2>{orderDetails.price}</h2>
            <h2>{orderDetails.quantity}</h2>
        </div>
        
    </div>
  );
}

export default OrderDetails;
