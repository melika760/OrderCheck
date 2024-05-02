import React from "react";
const CartContext = React.createContext({
    items:[],
    totalamount:0,
    additem:(item)=>{},
    removeItem:id=>{},
    clearCart:()=>{}
})
export default CartContext;