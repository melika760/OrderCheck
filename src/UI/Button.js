import styles from "./Button.module.css";
export default function Button(props){
    return(
        <button type={props.type || "button"} onClick={props.onClick} className={`${styles.btn} ${props.className}`}>{props.children}</button>
    )
}