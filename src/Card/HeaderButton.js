import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Styles from "./HeaderButton.module.css";
import { useContext } from 'react';
import CartContext from '../Store/cart-context';
const HeaderButton =(props)=>{
    const ctx=useContext(CartContext);
    const Number=ctx.items.reduce((currentNumber,item)=>{
        return currentNumber+item.amount;
    },0)
   
return(
    <button type="button" className={Styles.WrapCard} onClick={props.onOpen}>
    <span><FontAwesomeIcon icon={faCartShopping} color='white' size='lg'/></span>
    <span> Your Card</span>
    <span className={Styles.badge}>{Number}</span>
    </button>
)
}
export default HeaderButton;