import React, { useContext } from "react";
// import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import{Cards}from "../component/Cards.jsx"

import "../../styles/demo.css";
import { element } from "prop-types";

export const Films = () => {
 const {store, actions} = useContext(Context);
 const films = store.films;
 console.log(films);
 //Hacer use effect con condicional de loading.
 //Hacer el map de Films y dentro del return llama la card.


   

  return (
   <div className="d-flex 
   ">

  {films.map((film, index)=>{

    return( <Cards key={index} title = {film.title} text = {film.director}/>)
  })}
  </div>)
};
 
  
  

