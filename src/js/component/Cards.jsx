import React, { useContext } from "react";
// import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/cards.css";

export const Cards = (props) => {



   

  return (
  
   
    <div className="card col-12 col-md-3 flex-row flex-md-column p-0 m-4">
      <img src={props.image} class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
         {props.text}
        </p>
      </div>
    </div>
  



    
    )

  
};