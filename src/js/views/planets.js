import React, { useContext } from "react";
// import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Planets = () => {
 const {store, actions} = useContext(Context);
 const planets = store.planets;
 

   

  return (
   <div>

		{console.log(planets)};


      { planets.map((planet,index) => {

		return (
			  <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{planet.name}</h5>
            <p className="card-text">{planet.climate}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>)
     
   
})}
</div>)
  
};