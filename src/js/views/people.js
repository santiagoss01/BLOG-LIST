import React, {useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import{Spinner} from "../component/Spinner.jsx"

import { Context } from "../store/appContext";


import "../../styles/demo.css";

import{Cards}from "../component/Cards.jsx"

 const URL = "https://swapi.dev/api/"


export const People = () => {
  
  const {store, actions} = useContext(Context);
  
  const[loading, setLoading] = useState (false);
  
 
 
 const getPeople = async () =>{
 
   setLoading (true);
 
 const response = await fetch(`${URL}people/`);
 const data = await response.json();
   
 actions.insertPeople(data);
 
 setLoading (false);
 
 };
 
 
 
  const characters = store.people;
 
 
 
 useEffect(()=>{
   getPeople();
 
  },[]);
    
 
   return (
  <>
   {loading ? <Spinner/>:
 
   characters.map((char, index)=>{
 
    
 
     return( 
      <div className="container ml-8 d-flex my-10">
       <Cards key={index} image={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`}title = {char.name} text = {char.birth_year}
        />
         
       </div>)
   })}
   <div className="text-center my-4">
        <button
          type="button"
          className={`btn btn-warning shadow-sm ${!store.next_page || loading == true ? "invisible" : ""}`}
          onClick={() => getPeople(store.next_page)}
        >
          Show More <i className="fas fa-long-arrow-alt-down ms-1"></i>
        </button>
      </div>
   
 </>)
 };