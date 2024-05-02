import Styles from "./Order.module.css";
import useInput from "../hooks/use-input";
const Order=(props)=>{
const mobilecheck =value=>{
 if(value.trim()!=="" && value.trim().length>10){
 return true;
        }
return false;
    }
    let formIsValid=false;
const {value:enteredName,ValueIsvalid:NameIsvalid, hasError:NameHasError,Changehandler:NameChange,Blurhandler:NameBlur}=useInput(value=>value.trim()!=="");
const {value:enteredTel,ValueIsvalid:TelIsvalid, hasError:TelHasError,Changehandler:TelChange,Blurhandler:TelBlur}=useInput(mobilecheck);
const {value:enteredEmail,ValueIsvalid:EmailIsvalid, hasError:EmailHasError,Changehandler:EmailChange,Blurhandler:EmailBlur}=useInput(value=>value.includes("@"));
const {value:enteredAddress,ValueIsvalid:AddressIsvalid, hasError:AddressHasError,Changehandler:AddressChange,Blurhandler:AddressBlur}=useInput(value=>value.trim()!=="");
const {value:enteredPostalcode,ValueIsvalid:PostalcodeIsvalid, hasError:PostalcodeHasError,Changehandler:PostalcodeChange,Blurhandler:PostalcodeBlur}=useInput(value=>value.trim().length>6);
const FormSubmitHandler=event=>{
    event.preventDefault();
    if(!NameIsvalid || !TelIsvalid || !EmailIsvalid || !AddressIsvalid || !PostalcodeIsvalid){
        formIsValid=false;
        return;
    }else{
        formIsValid=true;
    }
    props.checkout({
        name:enteredName,
        mobile:enteredTel,
        email:enteredEmail,
        Address:enteredAddress,
       postcode: enteredPostalcode
    })
}

return(
    <form className={Styles.form} onSubmit={FormSubmitHandler}>
         {!formIsValid && <h3>Please complete the form</h3>}
        <label htmlFor="Name">
         Name: <input type="text" value={enteredName} onChange={NameChange} onBlur={NameBlur} id="name"/>
         {NameHasError && <p className={Styles.invalid}>Please Enter your name.</p>}
        </label>
        <label htmlFor="phoneNumber">
         Mobile: <input type="tel" value={enteredTel} onChange={TelChange} onBlur={TelBlur} id="phoneNumber"/>
         {TelHasError && <p className={Styles.invalid}>Please Enter your mobile number.</p>}
        </label>
  
    <label htmlFor="Email">
         Email: <input type="email" value={enteredEmail} onChange={EmailChange} onBlur={EmailBlur} id="Email"/>
         {EmailHasError && <p className={Styles.invalid}>Please Enter valid email.</p>}
        </label>
        <label htmlFor="Address">
         Address: <input type="text" value={enteredAddress} onChange={AddressChange} onBlur={AddressBlur} id="Address"/>
         {AddressHasError && <p className={Styles.invalid}>Please Enter your address.</p>}
        </label>
    
   <label htmlFor="PostCode">
         Postcode: <input type="text" value={enteredPostalcode} onChange={PostalcodeChange} onBlur={PostalcodeBlur} id="PostCode"/>
         {PostalcodeHasError && <p className={Styles.invalid}>Please Enter valid postCode.</p>}
        </label>
    <button>Next</button>
    </form>
)
}
export default Order;