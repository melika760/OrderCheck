import Styles from "./MenuItems.module.css";
import React,{useContext} from "react";
import CartContext from "../Store/cart-context";
import ChooseItem from "./ChooseItem";
const MenuItems=(props)=>{
const price=`£${parseInt(props.price).toFixed(2)}`;
const ctx =useContext(CartContext)

function AddItems (amount){
   ctx.additem(
      {
         id:props.id,
         title:props.title,
         amount:amount,
         price:props.price,
      }
   )}
return(
    <div className={Styles.wrapItems} id={props.id}>
    <div className={Styles.item}>
         <div className={Styles.prices}><h3>{props.title} </h3>
             <h3>{price}</h3>
            </div>
       <div className={Styles.flex}> 
        <p className={Styles.description}>{props.description}</p>
     <ChooseItem onAdd={AddItems}/>
      </div>
      {props.subCategory==="Hot Sandwich" && <div style={{textAlign:"left"}}><strong>({props.subCategory})</strong>
      <p>Served with Chips & Salad</p></div>}
         {props.subCategory==="Club Sandwich" && <div style={{textAlign:"left"}}><strong>({props.subCategory})</strong>
      <p>Served with White or Brown Bread & Garnish Salad.To add chips extra <strong>£1</strong></p></div>}
        </div>
    </div>
   )

}
export default MenuItems;