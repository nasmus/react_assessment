import React,{useReducer,useContext,useEffect} from 'react'
import Header from '../Component/Header'
import { useNavigate, useParams } from 'react-router-dom';
import products from '../Data/product'
import { Store } from '../Store';
import axios from 'axios';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

const reducer = (state,action) => {
  switch(action.type){
    case 'FATCH_REQUEST':
      return{...state, loading:true};
    case 'FATCH_SUCCESS':
      return{...state, product: action.payload, loading:false };
    case 'FATCH_FAILLED':
      return{...state, loading:false, error:action.payload};
    default:
      return state;
  }
}

function ProductDetailsScreen() {

  const [{loading, error, product}, dispatch] = useReducer( (reducer),{
    product:[],
    error:'',
    loading:true
  })
    const params = useParams();
    const { id } =params;
    console.log(products);

    useEffect(()=>{
      const fatchData = async() => {
        dispatch({ type:'FATCH_REQUEST' })
        try {
          const result = await axios.get(`http://localhost:3030/product/${id}`);
          dispatch({type:'FATCH_SUCCESS', payload:result.data})
        } catch (err) {
          dispatch({ type: 'FATCH_FAILLED', payload: error })
        }
        
      };
      fatchData();
    },[id])

    // bring data from react context api
    const {state, dispatch: ctxDispatch} = useContext(Store);
    const { cart } = state;
    


  return (
    <div className='ProudctDetailsScreen'>
        <Header />
        <p>{product.id}</p>
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
  )
}

export default ProductDetailsScreen