import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import{Spinner} from "../component/Spinner.jsx";

import { Context } from "../store/appContext";

import { Header } from "../component/Header.jsx";


import "../../styles/demo.css";

import{Cards}from "../component/Cards.jsx"

 const URL = "https://swapi.dev/api/"

export const Ships = () => {
 
  const {store, actions} = useContext(Context);
 const[loading, setLoading] = useState (false);
 const [visible, setVisible] = useState("");
  
 
 
 const getShips = async () =>{
 
   setLoading (true);
 
 const response = await fetch(`${URL}starships/`);
 const data = await response.json();
   
 actions.insertShips(data);
 
 setLoading (false);
 
 };
 
 
 
  const ships = store.ships;
 
 
 
 useEffect(()=>{
   getShips();
 
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
     
      <div className="d-flex flex-column align-items-center">
              <button id="info" type="button" className="btn btn-outline ">More info...</button>
              <span className={"extraInfo "+ visible}>
              <h5>Manufacturer : {sh.manufacturer}</h5>
                <h5>Starship-Class : {sh.starship_class}</h5>
                <h5>Crew : {sh.crew}</h5>
                <h5>Crew : {sh.crew}</h5>
                <h5>Cost in credits : {sh.cost_in_credits}</h5>


                
              </span>
              </div>
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
 

   

