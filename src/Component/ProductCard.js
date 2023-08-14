import React, { useContext, useState } from "react";
import "../Css/ProductCard.css";
import { Button } from "@mui/material";
import { Store } from "../Store";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [product]= useState(props);
  //data access from context api store
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  //product add into the cart
  const addToCartHandeler = async (item) => {
    const existItem = cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  return (
    <>
      <div key={product.product.id} className="product-card">
        <img src={`/image/${product.product.image}`} alt={product.product.name} />
        <Link to={`/productdetails/${product.product.id}`} ><h3>{product.product.name}</h3></Link>
        <p>${product.product.price}</p>
        <Button
          onClick={() => addToCartHandeler(product)}
          variant="contained"
          size="small"
        >
          Add To Cart
        </Button>
      </div>
    </>
  );
}

export default ProductCard;
