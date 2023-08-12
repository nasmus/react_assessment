import React, { useContext, useEffect, useReducer, useState } from "react";
import "../Css/SellerDashboard.css";
import Sidebar from "../Component/Sidebar";
import axios from "axios";
import { Store } from "../Store";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';




function DashBoardScreen() {
  const [data,setData] = useState([])

  //Proudct count
  useEffect(() => {
    const fatchData = async () => {
        const { data } = await axios.get(`http://localhost:3030/users/${1}`);
        setData(data)
    };
    fatchData();
  }, []);
  console.log(data)

  return (
    <div>
        <Sidebar />
      <div className="dashBoard">
        <div className="Order_information">
          <div className="Order_card_1">
            <div className="left">
              {/* <h1>{productCount}</h1> */}
              <p>Total Product</p>
            </div>
            <div className="right">
              <ProductionQuantityLimitsIcon />
            </div>
          </div>
          <div className="Order_card_1">
            <div className="left">
              {/* {totalOrder.map((item, index) => {
                if (userInfo._id === item._id) return <h1>{item.quentity}</h1>;
              })} */}
              <p>Product Orders</p>
            </div>
            <div className="right">
              <AddAlertIcon />
            </div>
          </div>
          <div className="Order_card_1">
            <div className="left">
              {/* {totalOrderPrice.map((orderItems) => {
                if (userInfo._id === orderItems._id)
                  return <h1>{orderItems.totalOrderPrice}</h1>;
              })} */}
              <p>total selles</p>
            </div>
            <div className="right">
              <AccountBalanceIcon />
            </div>
          </div>
          <div className="Order_card_1">
            <div className="left">
              <h1>5</h1>
              <p>Panding Order</p>
            </div>
            <div className="right">
              <BatchPredictionIcon />
            </div>
          </div>
        </div>
        <div className="product_and_order_section">
          <div className="product">
            
            <h4>Monthly Selles</h4>
          </div>
          <div className="order">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardScreen;
