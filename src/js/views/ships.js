import React, { useContext } from "react";
// import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Ships = () => {
 const {store, actions} = useContext(Context);
 const ships = store.ships;
 

   

  return (
   <div>

		{console.log(ships)};


      { ships.map((ship,index) => {

		return (
			  <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{ship.name}</h5>
            <p className="card-text">{ship.manufacturer}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>)
     
   
})}
</div>)
  
};
