import React, { useContext } from "react";
import { Store } from "../Store";
import { Button } from "@mui/material";
import Header from "../Component/Header";

function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandeler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <div>
      <Header />
      <h1 style={{display:'flex',justifyContent:'center'}}>Shoping Cart</h1>
      <div style={{display:'flex',justifyContent:'center'}} >
        <table>
          <thead >
            <tr>
              <th>
                <h1>id</h1>
              </th>
              <th>
                <h1>name</h1>
              </th>
              <th>
                <h1>price</h1>
              </th>
              <th>
                <h1>quantity</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr>
                <td>{item.product.id}</td>
                <td>{item.product.name}</td>
                <td>{item.product.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    onClick={() => removeItemHandeler(item)}
                    variant="light"
                  >
                    remove item
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartScreen;
