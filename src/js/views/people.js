import React, { useContext } from "react";
// import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const People = () => {
 const {store, actions} = useContext(Context);
 const people = store.people;
 

   

  return (
    <Cards element = {people} title = {element.name} text = {element.gender}/>
)
  
};