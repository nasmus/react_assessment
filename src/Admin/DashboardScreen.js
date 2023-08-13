import React, { useContext, useEffect, useReducer, useState } from "react";
import "../Css/SellerDashboard.css";
import Sidebar from "../Component/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';




function DashBoardScreen() {
  const navigate = useNavigate();
  const [data,setData] = useState([])

  //checking admis user information 
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('userInfo'))
    if(!item){
      navigate('/login')
    }
  },[navigate])

  //Proudct count
  useEffect(() => {
    const fatchData = async () => {
        const { data } = await axios.get(`https://my-json-server.typicode.com/nasmus/json_server/users/${1}`);
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
              <p>Product Orders</p>
            </div>
            <div className="right">
              <AddAlertIcon />
            </div>
          </div>
          <div className="Order_card_1">
            <div className="left">
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
      
      </div>
    </div>
  );
}

export default DashBoardScreen;
