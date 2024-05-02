import React,{useRef,useState} from "react";
import Styles from "./ChooseItem.module.css";
const ChooseItem = props=>{
    const InputRef=useRef()
    const[InvalidInput,setInvalidInput]=useState(false);
    const[btnhighlighted,setbtnhighlighted]=useState(false)
    function Submithandler(event){
    event.preventDefault();
    const enterednum = InputRef.current.value;
    const AmountNumber = +enterednum;
    if(enterednum.trim().length===0 || AmountNumber<1 || AmountNumber>5){
       setInvalidInput(true)
       return;
    }
    setbtnhighlighted(true)
    props.onAdd(AmountNumber)
    }
function changeclass(){
   setbtnhighlighted(false)
}
 const btnclasses=`${Styles.btn} ${btnhighlighted? Styles.bump:""}`
    return(
       <React.Fragment>
        <form className={Styles.choose} onSubmit={Submithandler}>
<input type="number" max={5} min={1} step={1} defaultValue={0} ref={InputRef} id="number" onChange={changeclass}/>
<button className={btnclasses}>+Add</button>
      </form>
       {InvalidInput && <p>Please choose Valid amount (1-5)</p>}
       </React.Fragment> 
    )
}
export default ChooseItem;