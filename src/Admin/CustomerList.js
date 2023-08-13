import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Component/Sidebar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CustomerList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  //checking admis user information 
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('userInfo'))
    if(!item){
      navigate('/login')
    }
  },[navigate])

  //customer list 
  useEffect(() => {
    const fatchData = async () => {
      const { data } = await axios.get(`https://my-json-server.typicode.com/nasmus/json_server/users`);
      setUsers(data);
    };
    fatchData();
  }, []);
  return (
    <div>
      <Sidebar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <tr>
            <th><h1>ID</h1></th>
            <th><h1>Name</h1></th>
            <th><h1>Name</h1></th>
          </tr>
          {users.map((item, index) => {
            if (item.isAdmin === false)
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name} </td>
                  <td>{item.phone}</td>
                </tr>
              );
          })}
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button>
          <Link to="/admin/addcustomer">Add customer</Link>
        </Button>
      </div>
    </div>
  );
}

export default CustomerList;
