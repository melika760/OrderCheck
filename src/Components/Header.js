import styles from "./Header.module.css";
import landing from "../img/Landing Image.jpg"
import Button from "../UI/Button";
import { Link } from "react-router-dom";
export default function Header(){
    return(<div className={styles.wrap}>
      <div className={styles.headerimg}>
        <img src={landing} alt="Food"/>
      </div>
      <div className={styles.content}>
        <h3>Genuine Taste,</h3>
        <h3>Unique Pleasure</h3>
        <p>We invite you to savor every moment of your dining experience with us, from the warm ambiance to the impeccable service. Join us for a memorable meal crafted with love and passion.</p>
   <Link to="/Menu" className={styles.link}>  <Button type="button" className={styles.btn}><span>Explore Menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.arrow}>
  <path d="M14.43 5.92999L20.5 12L14.43 18.07" stroke="#323A30" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.5 12H20.33" stroke="#323A30" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg></Button></Link> 
      </div>
        </div>)
}