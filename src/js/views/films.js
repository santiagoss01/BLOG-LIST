import React, { useEffect, useContext, useState } from "react";
// import { Link } from "react-router-dom";
import {Spinner} from "../component/Spinner.jsx";


import { Context } from "../store/appContext";
import{Cards}from "../component/Cards.jsx";



import "../../styles/demo.css";


const URL = "https://swapi.dev/api/"


export const Films = () => {
 const {store, actions} = useContext(Context);
 const[loading, setLoading] = useState (false);
 


const getfilms = async () =>{

  setLoading (true);

const response = await fetch(`${URL}films/`);
const data = await response.json();
  
actions.insertFilms(data);

setLoading (false);

};



 const filmes = store.films;



useEffect(()=>{
  getfilms();

 },[]);
   

  return (
 <>
  {loading ? <Spinner/>:

  filmes.map((film, index)=>{

   

    return( 
      <div className="container ml-8 d-flex my-10">
       <Cards key={index} image={`https://starwars-visualguide.com/assets/img/films/${index+1}.jpg`}title = {film.title} text = {film.director} />
       </div>)
  })}
  
</>)
};
 
  
  


