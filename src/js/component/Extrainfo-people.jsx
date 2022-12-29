import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/cards.css";
import "../../styles/demo.css";

export const Moreinfopeople =(props)=>{

const[visible, setVisible] = useState(-1);
const {store, actions} = useContext(Context);





return (<div className="d-flex flex-column justify-content-arround">
<button onClick={(e)=>actions.setVisible(props.id)}  id="info" type="button" className="btn btn-outline ">More info...</button>
<span className={store.visible === props.id? "extraInfo "+ "": "extraInfo invisible"}>
  <h5>Birth year : {store.people[props.id].birth_year}</h5>
  <h5>Height : {store.people[props.id].height}</h5>
  <h5>Mass : {store.people[props.id].mass}</h5>
  <h5>Eye color : {store.people[props.id].eye_color}</h5>

</span>
</div>)



}