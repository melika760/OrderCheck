import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultvalue={
    items:[],
    totalamount:0
}
const CartReducer=(state,action)=>{
    if(action.type==="ADD_ITEM"){
        const existingItemIndex=state.items.findIndex(item=>item.id===action.item.id)
        const existingItem=state.items[existingItemIndex];
        let UpdatedItems;
        if(existingItem){
const updateItem={
    ...existingItem,
    amount:existingItem.amount+action.item.amount
}
UpdatedItems=[...state.items];
UpdatedItems[existingItemIndex]=updateItem
        }
else{
    UpdatedItems= state.items.concat(action.item);
}

const UpdatedAmount= state.totalamount+(action.item.price)*(action.item.amount);
return({
    items:UpdatedItems,
    totalamount:UpdatedAmount
})
    }
    if(action.type==="REMOVE"){
        const existingItemIndex=state.items.findIndex(item=>item.id===action.id)
        const existingItem=state.items[existingItemIndex];
        const UpdatedAmount=state.totalamount-existingItem.price;
        let UpdatedItems;
        if(existingItem.amount===1){
          UpdatedItems=state.items.filter(item=>item.id !==action.id)
        }else{
            let UpdateItem;
            UpdateItem={...existingItem,amount:existingItem.amount-1}
            UpdatedItems=[...state.items]
            UpdatedItems[existingItemIndex]=UpdateItem;
        }
return{
    items:UpdatedItems,
    totalamount:UpdatedAmount
}
    }
    if(action.type==="CLEAR"){
    return defaultvalue;
    }
return defaultvalue;
}
const CartProvider=props=>{
    const[CardState,dispatchCart]=useReducer(CartReducer,defaultvalue)
    function addItemHandler(item){
dispatchCart({type:"ADD_ITEM", item:item})
    }
    function removeItemHandler(id){
dispatchCart({type:"REMOVE", id:id})
    }
    function ClearCardHandler(){
        dispatchCart({type:"CLEAR"})
    }
    const cartcontext={
items:CardState.items,
totalamount:CardState.totalamount,
additem:addItemHandler,
removeItem:removeItemHandler,
clearCart:ClearCardHandler,
    }
    return(
       <CartContext.Provider value={cartcontext}>
        {props.children}
       </CartContext.Provider>
    )
}
export default CartProvider