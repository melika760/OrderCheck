import Modals from "../UI/Modals";
import classes from "./Card.module.css";
import { useContext,useState } from "react";
import CartContext from "../Store/cart-context";
import CartItems from "./CartItems";
import Order from "../Components/Order";
import Button from "../UI/Button";
const Card =(props)=>{
  const[showForm,setshowForm]=useState(false);
  const[submit,setSubmit]=useState(false);
    const ctx =useContext(CartContext);
    const TotalAmount =ctx.totalamount.toFixed(2)
 const hasItem = ctx.items.length>0
 const Addhandler=item=>{
  ctx.additem({...item,amount:1})
 }
 const RemoveHandler=id=>{
  ctx.removeItem(id)
 }
 
 const GotoOrder=()=>{
setshowForm(true)
 }
 const CheckoutHandler=async(userData)=>{
const response=await fetch("https://dominique-5aac4-default-rtdb.firebaseio.com/order.json",
{
  method:"POST",
  body:JSON.stringify({
  user:userData,
  orders:ctx.items})
})
if(!response.ok){
  throw new Error("Something went wrong please try later.")
}
setSubmit(true);
 ctx.clearCart();


 }
    const cartItems = (
        <ul className={classes['cart-items']}>
          {ctx.items.map((item) => (
            <CartItems title={item.title} price={item.price} amount={item.amount} key={item.id} id={item.id} onAdd={Addhandler.bind(null,item)} onRemove={RemoveHandler.bind(null,item.id)}/>
    
          ))}
        </ul>
      );
      const OrderShow=<div>
        {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>£{TotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button} onClick={GotoOrder}>Order</button>}
      </div>
      </div>
    return( <Modals onClose={props.onClose}>
{!showForm && !submit && OrderShow}
{showForm && !submit && <Order checkout={CheckoutHandler} onclose={props.onClose}/>}
{submit && <div><p className={classes.submit}>Your order is submitted!</p>
<Button onClick={props.onClose}className={classes.close}>Close</Button></div>
}
        </Modals>
    )
}
export default Card;
