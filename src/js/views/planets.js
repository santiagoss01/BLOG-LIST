import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import{Spinner} from "../component/Spinner.jsx";

import { Context } from "../store/appContext";
import { Header } from "../component/Header.jsx";
import{Moreinfoplanets} from "../component/Extrainfo-planets.jsx";


import "../../styles/demo.css";

import{Cards}from "../component/Cards.jsx"



export const Planets = () => {
 const {store, actions} = useContext(Context);
 const[loading, setLoading] = useState (false);
 const [visible, setVisible] = useState("");


  
 
 
 const getPlanets = async (url) =>{
 
   setLoading (true);
 
 const response = await fetch(url);
 const data = await response.json();
   
 actions.insertPlanets(data);
 
 setLoading (false);
 
 };
 
 
 
  const planets = store.planets;
 
 
 
 useEffect(()=>{
   getPlanets("https://swapi.dev/api/planets/");
 
  },[]);
    
 
   return (
  <>
   <Header/>
   {loading ? <Spinner/>:
 
   planets.map((pl, index)=>{
 
    
 
     return(
      <div key={index} className="container ml-8 d-flex my-10">
      <Cards image={`https://starwars-visualguide.com/assets/img/planets/${index+1}.jpg`}title = {pl.name} text = {pl.climate} />
      <Moreinfoplanets
      id={index}/>
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