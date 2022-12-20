import React, { useContext } from "react";
// import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Cards = (props) => {
 const {store, actions} = useContext(Context);

 

   

  return (
   <div>

	
			  <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
     
   

</div>)
  
};