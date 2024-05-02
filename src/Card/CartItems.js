import Styles from "./CartItems.module.css"
const CartItems=props=>{
    const price=`£${parseInt(props.price).toFixed(2)}`;
return(
    <div className={Styles.wrapitems}>
        <div>
            <h4>{props.title}</h4>
            <h5>{price}</h5>
        </div>
    
        <div className={Styles.btn}>
            <button onClick={props.onAdd}>+</button>
            <span className={Styles.amount}>x{props.amount}</span>
            <button onClick={props.onRemove}>-</button>
        </div>
    </div>
)
}
export default CartItems;