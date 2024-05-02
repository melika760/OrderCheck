import styles from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons";

import { Fragment } from "react";
export default function Footer(){
    return( <Fragment> 
        
        <div className={styles.wraper} >
        <div className={styles.description}>
            <h3><FontAwesomeIcon icon={faClock}  style={{color: "#706b6b",}} /> Opening Hours</h3>
            <p> Every day 9 am - 5pm</p>
            <p> Monday closed.</p>
        </div>
        <div className={styles.description}>
            <h3> <FontAwesomeIcon icon={faLocationDot}  style={{color: "#706b6b",}} />  Address</h3>
            <p>19 S End Rd, London NW3 2PT</p>
        </div>
     
        <div className={styles.description}>
            <h3><FontAwesomeIcon icon={faPhone}  style={{color: "#706b6b",}} /> Contact Us</h3>
            <p>Call Number: 02074319929</p>
        </div>
        </div>
        <div>
      
        </div>
                </Fragment>)}