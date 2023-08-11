import React,{useContext,useReducer} from "react";
import products from '../Data/product'
import '../Css/ProductCard.css'
import Header from "../Component/Header";
import ProductCard from "../Component/ProductCard";
function HomeScreen() {
  return(
    <>
    <Header />
    <div className="product-grid">
    
        {
            products.map((product) => (
                <ProductCard product={product} ></ProductCard >
            ))
        }
    
    </div>
    </>
  );
}

export default HomeScreen;
