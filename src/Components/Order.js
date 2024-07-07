import Styles from "./Order.module.css";
import useInput from "../hooks/use-input";
const Order=(props)=>{

    let formIsValid=false;
const {value:enteredName,ValueIsvalid:NameIsvalid, hasError:NameHasError,Changehandler:NameChange,Blurhandler:NameBlur}=useInput(value=>value.trim()!=="");
const {value:enteredTel,ValueIsvalid:TelIsvalid, hasError:TelHasError,Changehandler:TelChange,Blurhandler:TelBlur}=useInput(value=>value.trim()!=="");

const FormSubmitHandler=event=>{
    event.preventDefault();
    if(!NameIsvalid || !TelIsvalid ){
        formIsValid=false;
        return;
    }else{
        formIsValid=true;
    }
    props.checkout({
        name:enteredName,
        mobile:enteredTel,
    })
}

return(
    <form className={Styles.form} onSubmit={FormSubmitHandler}>
         {!formIsValid && <h3>Please enter your name and table's number</h3>}
        <label htmlFor="Name">
         Name: <input type="text" value={enteredName} onChange={NameChange} onBlur={NameBlur} id="name"/>
         {NameHasError && <p className={Styles.invalid}>Please Enter your name.</p>}
        </label>
        <label htmlFor="table">
         Table number: <input type="num" value={enteredTel} onChange={TelChange} onBlur={TelBlur} id="tablenumber"/>
         {TelHasError && <p className={Styles.invalid}>Please Enter your mobile number.</p>}
        </label>
    <button className={Styles.next}>Next</button>
    <button className={Styles.close} onClick={props.onclose}>Close</button>
    </form>
)
}
export default Order;