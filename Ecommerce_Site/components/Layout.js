import React, { createContext, useEffect, useReducer } from 'react';
import Header from "./Header";
import { reducer } from './LayoutReducer';

export const CartContext = createContext();

const initialState = {
  item: [],
  totalAmount: 0,
  totalItem: 0,
  orderList: [],
  selectedOrder: ""
};
/*const reducer = (state, action) => {
//   console.log(state.item);
  if(action.type === "addToCart"){
    console.log("Addtocart");
    return{
      ...state,
      item : [...state.item, action.payload],
    }
  }
  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;
        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;
        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }
  return state;
};*/


export default function Layout({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    // item are adding into the cart
    const addCart = (product)=>{
      let check = 0;
      for(let i=0; i<state.item.length; i++){
        if(state.item[i].id === product.id){
          check = 1;
          break;
        }
      }
      if(check){
        return dispatch({
          type: "INCREMENT",
          payload: product.id,
        });
      }
      else{
        return dispatch({
          type: "addToCart",
          payload: product,
        });
      }
    }
     // to delete the indv. elements from an Item Cart
    const removeItem = (id) => {
      return dispatch({
        type: "REMOVE_ITEM",
        payload: id,
      });
    };
    // clear the cart
    const clearCart = () => {
      return dispatch({ type: "CLEAR_CART" });
    };

    // increment the item
    const increment = (id) => {
      return dispatch({
        type: "INCREMENT",
        payload: id,
      });
    };

    // decrement the item
    const decrement = (id) => {
      return dispatch({
        type: "DECREMENT",
        payload: id,
      });
    };

    // when place a order
    const addOrderList = (order)=>{
      return dispatch({
        type: "addorderList",
        payload: order,
      })
    };
    // when want to show order detais
    const setSelectedOrder = (invoice)=>{
      return dispatch({type: "setSelectedOrder",payload: invoice})
    };

    useEffect(() => {
      dispatch({ type: "GET_TOTAL" });
    }, [state.item]);
  

  return (
    <div>
    <CartContext.Provider value={{...state, addCart,removeItem, clearCart, increment, decrement,addOrderList,setSelectedOrder}}>
      <Header/>
      {children}
    </CartContext.Provider>
    </div>
  )
}
