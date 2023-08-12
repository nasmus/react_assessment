import React, { useContext } from "react";
import { Store } from "../Store";
import { Button } from "@mui/material";

function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  console.log(cartItems);
  const updateCartHandeler = async (item, quantity) => {
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  const removeItemHandeler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <div>
      <h1>Shoping Cart</h1>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
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
                >remove item</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartScreen;
