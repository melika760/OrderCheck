import styles from "./Menue.module.css";
import pasta from "../img/spaguetti.png";
import Breakfast from "../img/english-breakfast.png";
import Starters from "../img/Starter.png";
import Salad from "../img/salad.png";
import Hotdishes from "../img/Hotdishes.png";
import Sandwwich from '../img/sandwich.png';
import Juices from "../img/juices.png";
import Smoothies from "../img/smoothie.png";
import Softdrinks from "../img/Softdrink.png";
import Hotdrinks from "../img/Hotdrinks.png";
import {HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faArrowUp} from "@fortawesome/free-solid-svg-icons";
import MenuItems from "./MenuItems";
import { dummydata } from "./MenuData";
export default function Menue(){
    const groupedItems = dummydata.reduce((acc, item) => {
        if (!acc[item.Category]) {
          acc[item.Category] = [];
        }
        acc[item.Category].push(item);
        return acc;
      }, {});

   
    function Gotop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    const MenuLists=<div className={styles.wraper}>
        <Link to="#Breakfast" className={styles.col} smooth><div >
        <img src={Breakfast} alt="Breakfast"/>  <p>Breakfast</p></div></Link>
        <Link to="#Starter"className={styles.col} smooth>  <div>
        <img src={Starters} alt="Starter"/> <p>Starter</p> </div></Link>
        <Link to="#Salads"className={styles.col} smooth><div >
        <img src={Salad} alt="Salad"/>  <p>Salad</p></div></Link>
        <Link to="#Pasta"className={styles.col} smooth><div >
        <img src={pasta} alt="Pasta"/>  <p>Pasta</p></div></Link>
        <Link to="#Hot dishes"className={styles.col} smooth><div >
        <img src={Hotdishes} alt="Hotdishes"/>  <p>Hot Dishes</p></div></Link>
        <Link to="#Sandwiches"className={styles.col} smooth><div >
        <img src={Sandwwich} alt="Sandwiches"/>  <p>Sandwiches</p></div></Link>
        <Link to="#Juices"className={styles.col} smooth><div >
        <img src={Juices} alt="Juices"/>  <p>Juices</p></div></Link>
        <Link to="#Smoothies"className={styles.col} smooth><div >
        <img src={Smoothies} alt="Smoothies"/>  <p>Smoothies</p></div></Link>
        <Link to="#Soft drinks"className={styles.col} smooth><div >
        <img src={Softdrinks} alt="Softdrinks"/>  <p>Soft Drinks</p></div></Link>
   <Link to="#Hot drinks"className={styles.col} smooth><div >
        <img src={Hotdrinks} alt="Hotdrinks"/>  <p>Hot Drinks</p></div></Link>
       
      
        </div> 
    return(<div className={styles.mobile}>
        <h1 className={styles.header}>Foods & Drinks</h1>
        {MenuLists}
        <div>
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className={styles.all}>
              <h2 className={styles.title} id={category}>{category}</h2>
              {category==="Pasta" && <p className={styles.extra}>All pasta dishes can be served either Spaghetti or Penne</p>}
              {category==="Salads" && <p className={styles.extra}>All Served with Pita Bread</p>}
            <div className={styles.wrap}> {items.map((item) => (
                <MenuItems
                  Category={item.Category}
                  title={item.title}
                  description={item.description}
                  price={parseInt(item.price).toFixed(2)}
                  key={item.id}
                  id={item.id}
                  subCategory={item.subCategory}
                />
              ))}</div>
             <button onClick={Gotop} className={styles.btn}><FontAwesomeIcon icon={faArrowUp} flip size="2xl" /><p>Go Top</p></button>
            </div>
          ))}
        </div>
    </div>)
}