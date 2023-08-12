import React,{useReducer,useEffect,} from "react";
import '../Css/ProductCard.css'
import axios from "axios";
import Header from "../Component/Header";
import ProductCard from "../Component/ProductCard";

const reducer = (state,action) => {
  switch(action.type){
    case 'FATCH_REQUEST':
      return{...state, loading:true};
    case 'FATCH_SUCCESS':
      return{...state, products: action.payload, loading:false };
    case 'FATCH_FAILLED':
      return{...state, loading:false, error:action.payload};
    default:
      return state;
  }
}

function HomeScreen() {
  const [{loading, error, products}, dispatch] = useReducer( reducer,{
    products:[],
    loading:true,
    error:''
  })
  useEffect(()=>{
    const fatchData = async() => {
      dispatch({ type:'FATCH_REQUEST' })
      try {
        const result = await axios.get(`http://localhost:3030/product`);
        dispatch({type:'FATCH_SUCCESS', payload:result.data})
      } catch (err) {
        dispatch({ type: 'FATCH_FAILLED', payload:err.message })
      }
      
      //setProducts(result.data); // if we use useState then we use it
    };
    fatchData();
  },[])

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
