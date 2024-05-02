import ReactDom from "react-dom";
import Styles from "./Modals.module.css";
import { Fragment } from "react";
const Backdrops=(props)=>{
    return(
<div className={Styles.backdrop} onClick={props.onClose}/>
    )
}
const Modaloverley=(props)=>{
    return(
<div className={Styles.overley}>{props.children}</div>
    )
}
const overleyShow=document.getElementById("Overleys");
const Modals=(props)=>{
   return(
    <Fragment>
        { ReactDom.createPortal(<Backdrops onClose={props.onClose}/>,overleyShow)};
    {ReactDom.createPortal(<Modaloverley>{props.children}</Modaloverley>,overleyShow)}
    </Fragment>
   )
}
export default Modals;