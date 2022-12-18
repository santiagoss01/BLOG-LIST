import React, { useContext } from "react";
// import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const People = () => {
 const {store, actions} = useContext(Context);
 const people = store.people;
 

   

  return (
   <div>

		{console.log(people)};


      { people.map((car,index) => {

		return (
			  <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{car.name}</h5>
            <p className="card-text">{car.homeworld}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>)
     
   
})}
</div>)
  
};