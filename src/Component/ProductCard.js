import React,{useContext, useState} from "react";
import '../Css/ProductCard.css'
import { Button } from "@mui/material";
import Header from "./Header";
import { Store } from "../Store";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [product] = useState(props)
  //const {products} = props;
  console.log(product)
  
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandeler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const { data } = await axios.get(`/api/products/${item._id}`);
    // if (data.countInStock < quantity) {
    //   window.alert("Sorry Bro !");
    //   return;
    // }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  return (
    <>
    
    
            <div key={product.product.id} className="product-card">
              <img src={product.product.image} alt={product.product.name} />
              <h3>{product.product.name}</h3>
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
