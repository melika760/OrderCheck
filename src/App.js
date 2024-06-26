import { Route,Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./Components/Nav";
import React,{useState,Suspense}from "react";
import Card from "../src/Card/Card";
import CartProvider from "./Store/CartProvider";
import LoadingSpinner from "./UI/LoadingSpinner";

const Menupage =React.lazy(()=>import("./pages/Menupage"));
const ContactUs=React.lazy(()=>import("./Components/ContactUs"));
function App() { 
  const[ShowCard,setShowCard]=useState(false);
  function opencard(){
    setShowCard(true)
  }
  function CloseCard(){
    setShowCard(false)
  }
  return (<CartProvider>
<Nav onShow={opencard}/>
{ShowCard && <Card onClose={CloseCard}/>}
<Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path="/Menu" element={<Menupage/>}/>
  <Route path="/Contact" element={<ContactUs/>}/>
</Routes>
</Suspense>
</CartProvider>

  );
}

export default App;
