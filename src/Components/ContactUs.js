import styles from "./ContactUs.module.css"
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
export default function ContactUs(){
    const position =[51.554595679368795, -0.16597705865409015]
    return( <Fragment> 
        <div className={styles.wraper} >
        <div className={styles.description}>
            <h3><FontAwesomeIcon icon={faClock} style={{color: "#000000",}} /> Opening Hours</h3>
            <p> Every day 9 am - 5pm</p>
            <p> Monday closed.</p>
        </div>
        <div className={styles.description}>
            <h3>
        <FontAwesomeIcon icon={faLocationDot}  style={{color: "#000000",}} /> Address</h3>
            <p>19 S End Rd, London NW3 2PT</p>
        </div>
     
        <div className={styles.description}>
            <h3><FontAwesomeIcon icon={faPhone} style={{color: "#000000",}} /> Contact Us</h3>
            <p>Call Number: 02074319929</p>
        </div>
        </div>
        <div>
        <div style={{ display: "flex" }}>
      <MapContainer
        style={{
          height: "80vh",
          width: "80%",
          margin:"0px auto",
          borderRadius:"40px",
          marginBottom:"60px"
        }}
        center={[51.554698376223385, -0.16606074917867988]}
        zoom={80}
      >
    <Marker position={position}><Popup>Dominique's Cafe</Popup></Marker>
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
      </MapContainer>
    </div>
        </div>
                </Fragment>)
}