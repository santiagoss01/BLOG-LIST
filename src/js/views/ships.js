import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Ships = () => {
  const [myships, setMyships] = useState([]);

  const getInfo = () => {
    fetch("https://www.swapi.tech/api/starships/", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMyships(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);

 

  // const { store, actions } = useContext(Context);

  return (
   <div>

		{ console.log(myships)}


      {  myships.map((ship, index) => {

		return (
			
		<p>{ship.name}-{ship.url}-{ship.uid} </p>
		
		)
        // <div key={ship.uid} className="card">
        //   <div className="card-body">
        //     <h5 className="card-title">{ship.name}</h5>
        //     <p className="card-text">{ship.url}</p>
        //     <a href="#" className="btn btn-primary">
        //       Go somewhere
        //     </a>
        //   </div>
        // </div>
     
   
})}
</div>)
  
};
