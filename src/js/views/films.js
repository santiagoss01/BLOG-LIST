import React, { useEffect, useContext } from "react";
// import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import{Cards}from "../component/Cards.jsx"

import "../../styles/demo.css";


export const Films = () => {
 const {store, actions} = useContext(Context);
 const films = store.films;


 




 console.log(films);
 //Hacer use effect con condicional de loading.
 //Hacer el map de Films y dentro del return llama la card.


   

  return (
 <>

  {films.map((film, index)=>{

   

    return(  <Cards key={index} image={`https://starwars-visualguide.com/assets/img/films/${index+1}.jpg`}title = {film.title} text = {film.director} />)
  })}
  
</>)
};
 
  
  
console.log(<Cards/>);
