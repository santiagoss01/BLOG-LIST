import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import{Spinner} from "../component/Spinner.jsx";

import { Context } from "../store/appContext";


import "../../styles/demo.css";

import{Cards}from "../component/Cards.jsx"

 const URL = "https://swapi.dev/api/"

export const Planets = () => {
 const {store, actions} = useContext(Context);
 const[loading, setLoading] = useState (false);


  
 
 
 const getPlanets = async () =>{
 
   setLoading (true);
 
 const response = await fetch(`${URL}planets/`);
 const data = await response.json();
   
 actions.insertPlanets(data);
 
 setLoading (false);
 
 };
 
 
 
  const planets = store.planets;
 
 
 
 useEffect(()=>{
   getPlanets();
 
  },[]);
    
 
   return (
  <>
   {loading ? <Spinner/>:
 
   planets.map((pl, index)=>{
 
    
 
     return(
      <div className="container ml-8 d-flex my-10">
      <Cards key={index} image={`https://starwars-visualguide.com/assets/img/planets/${index+1}.jpg`}title = {pl.name} text = {pl.climate} />
      </div>)
   })}
      <div className="text-center my-4">
        <button
          type="button"
          className={`btn btn-warning shadow-sm ${!store.next_page || loading == true ? "invisible" : ""}`}
          onClick={() => getPlanets(store.next_page)}
        >
          Show More <i className="fas fa-long-arrow-alt-down ms-1"></i>
        </button>
      </div>
   
 </>)
 };