import { Fragment } from "react";

import Menue from "../Components/Menue";
import Footer from "../Components/Footer";
import { dummydata } from "../Components/MenuData";



export default function Menupage(props){

const saveDataToLocalStorage = () => {
    const data = JSON.stringify(dummydata);
    localStorage.setItem('menuData', data);
  };
  
  saveDataToLocalStorage();
  
    return(
        <Fragment>
            <Menue/>
          
            <Footer/>
        </Fragment>
    )
}