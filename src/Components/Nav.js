import styles from "./Nav.module.css"
import {  NavLink } from "react-router-dom";
import HeaderButton from "../Card/HeaderButton";
export default function Nav(props){
return(<div className={styles.wrap}>
    <div className={styles.logo}><h2>Dominiques</h2></div>
    <div className={styles.wraper}>
    <NavLink to="/"exact activeClassName={styles.active}>Home</NavLink>
    <NavLink to="/Menu"activeClassName={styles.active}>Menu</NavLink>
    <NavLink to="/Contact"activeClassName={styles.active}>Contact</NavLink>
   <HeaderButton onOpen={props.onShow}/>
    </div>
</div>)
}