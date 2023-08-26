import React, { useReducer, useContext, useEffect } from "react";
import Header from "../Component/Header";
import { useParams } from "react-router-dom";
import { Store } from "../Store";
import axios from "axios";
import { Button } from "@mui/material";

const reducer = (state, action) => {
  switch (action.type) {
    case "FATCH_REQUEST":
      return { ...state };
    case "FATCH_SUCCESS":
      return { ...state, product: action.payload };
    case "FATCH_FAILLED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductDetailsScreen() {
  // bring data from react context api
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  const [{ error, product }, dispatch] = useReducer(reducer, {
    product: [],
    error: "",
  });
  const params = useParams();
  const { id } = params;

  // product get from api using product id
  useEffect(() => {
    const fatchData = async () => {
      dispatch({ type: "FATCH_REQUEST" });
      try {
        const result = await axios.get(`https://my-json-server.typicode.com/nasmus/json_server/product/${id}`);
        dispatch({ type: "FATCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FATCH_FAILLED", payload: error });
      }
    };
    fatchData();
  }, [id, error]);

  return (
    <div>
      <Header />
      <div
        style={{ display: "flex", alignItems: "center",justifyContent:'center', paddingTop: "60px" }}
      >
        <div>
          <img src={`/image/${product.image}`} alt={product.name}  />
        </div>
        <div>
          <h1>{product.name}</h1>
          <h3>{product.price}</h3>
          <h3>{product.id}</h3>
          <Button>Checkout</Button>
        </div>
        
      </div>
      
    </div>
  );
}

export default ProductDetailsScreen;
