import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
    userInfo: localStorage.getItem('userInfo')
    ,
    cart: {
        cartItems :[],
    },
}

function reducer(state,action) {
    switch(action.type){
        case 'CART_ADD_ITEM':
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(
                (item) => item.id === newItem.id
            );
            const cartItems = existItem ? state.cart.cartItems.map((item) => 
                item.id === existItem.id ? newItem : item
            ) : [...state.cart.cartItems, newItem]
            return {...state, cart:{...state.cart, cartItems}};
            
        case 'CART_REMOVE_ITEM':{
            const cartItems = state.cart.cartItems.filter((item) => item.id !== action.payload.id);
            return{...state, cart:{...state.cart,cartItems}}
            }
        
        case 'USER_SIGNIN':
            return {...state, userInfo: action.payload}
        case 'USER_SIGNOUT':
            return {...state, userInfo: null,cart: {
                cartItems:[],
                shippingAddress:{},
                paymentMethod: '',
            }}
        
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state,dispatch] = useReducer(reducer, initialState);
    const value = {state,dispatch}
    return <Store.Provider value={value}>{ props.children }</Store.Provider>
} 