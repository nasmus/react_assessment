import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Component/Sidebar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function CustomerList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      const { data } = await axios.get(`http://localhost:3030/users`);
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
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
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
