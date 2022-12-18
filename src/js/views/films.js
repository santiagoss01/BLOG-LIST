import React, { useContext } from "react";
// import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Films = () => {
 const {store, actions} = useContext(Context);
 const films = store.films;
 

   

  return (
   <div>

		{console.log(films)};


      { films.map((film,index) => {

		return (
			  <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <p className="card-text">{film.director}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>)
     
   
})}
</div>)
  
};
