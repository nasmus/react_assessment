import React from "react";
import '../Css/ProductCard.css'
import { Button } from "@mui/material";
import products from '../Data/product'
import Header from "./Header";

function ProductCard() {
  return (
    <>
    <Header />
    <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Button>Add to Cart</Button>
            </div>
            
          ))}
        </div>
    </>
    
  );
}

export default ProductCard;
