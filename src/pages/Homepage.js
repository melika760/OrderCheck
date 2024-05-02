import { Fragment } from "react";
import Header from "../Components/Header";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
export default function Homepage(props){
    return (
        <Fragment>
        <Header/>
        <AboutUs/>
        <Footer/>
        </Fragment>
          );
}