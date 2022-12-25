import React, { useContext } from "react";
// import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/cards.css";

export const Cards = (props) => {

const handleOnErrorImg = (e) => {
    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
};




   

  return (
   
    <div id="Mycard" className="card col-12 col-md-3 flex-row flex-md-column p-0 m-4 gy-10 mb-30">
      <img src={props.image} onError={handleOnErrorImg} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
         {props.text}
        </p>
      </div>
    </div>
  



    
    )

  
};