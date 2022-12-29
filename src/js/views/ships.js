import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import{Spinner} from "../component/Spinner.jsx";

import { Context } from "../store/appContext";

import { Header } from "../component/Header.jsx";

import { Moreinfoships} from "../component/Extrainfo-ships.jsx";


import "../../styles/demo.css";

import{Cards}from "../component/Cards.jsx"



export const Ships = () => {
 
  const {store, actions} = useContext(Context);
 const[loading, setLoading] = useState (false);
 const [visible, setVisible] = useState("");
  
 
 
 const getShips = async (url) =>{
 
   setLoading (true);
 
 const response = await fetch(url);
 const data = await response.json();
   
 actions.insertShips(data);
 
 setLoading (false);
 
 };

 console.log(next_page);
 
 const next_page = store.next_page;
 
 console.log(next_page);
 
  const ships = store.ships;
 
 
 
 useEffect(()=>{
   getShips("https://swapi.dev/api/starships/");
 
  },[]);
    
 
   return (
  <>
   <Header/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   {loading ? <Spinner/>:
 
   ships.map((sh, index)=>{
 
    
 
     return( 
      <div key={index} className="container ml-8 d-flex my-10">
      
      <Cards image={`https://starwars-visualguide.com/assets/img/starships/${index+1}.jpg`} title = {sh.name} text = {sh.model} />
     <Moreinfoships
     id={index}/>

    </div>)
   })}
   
      <div className="text-center my-4">
        <button
          type="button"
          className={`btn btn-warning shadow-sm ${!store.next_page || loading == true ? "invisible" : ""}`}
          onClick={() => getShips(store.next_page)}
        >
          Show More <i className="fas fa-long-arrow-alt-down ms-1"></i>
        </button>
      </div>
   
 </>)
 };
 

   

