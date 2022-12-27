import React, {useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import{Spinner} from "../component/Spinner.jsx"

import { Context } from "../store/appContext";
import { Header } from "../component/Header.jsx";


import "../../styles/demo.css";

import{Cards}from "../component/Cards.jsx"

 const URL = "https://swapi.dev/api/"


export const People = () => {
  
  const {store, actions} = useContext(Context);
  
  const[loading, setLoading] = useState (false);
  const [visible, setVisible] = useState("");
  
 
 
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
   <Header/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   {loading ? <Spinner/>:
 
   characters.map((char, index)=>{
 
    
 
     return( 
      <div key={index} className="container ml-8 d-flex my-10">
       <Cards image={`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`}title = {char.name} 
        />
        <div className="d-flex flex-column align-items-center">
              <button id="info" type="button" className="btn btn-outline ">More info...</button>
              <span className={"extraInfo "+ visible}>
                <h5>Hair color : {char.hair_color}</h5>
                <h5>Gender : {char.gender}</h5>
                <h5>Eye color : {char.eye_color}</h5>
                <h5>Height : {char.height}</h5>
                <h5>Mass: {char.mass}</h5>
                <h5>birth_year: {char.birth_year}</h5>
       
              </span>
              </div>
         
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