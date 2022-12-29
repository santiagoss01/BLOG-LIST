import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/cards.css";
import "../../styles/demo.css";

export const Moreinfoships =(props)=>{

const[visible, setVisible] = useState(-1);
const {store, actions} = useContext(Context);





return (<div className="d-flex flex-column justify-content-arround">
<button onClick={(e)=>actions.setVisible(props.id)}  id="info" type="button" className="btn btn-outline ">More info...</button>
<span className={store.visible === props.id? "extraInfo "+ "": "extraInfo invisible"}>
  <h5>Model : {store.ships[props.id].model}</h5>
  <h5>Manufacturer : {store.ships[props.id].manufacturer}</h5>
  <h5>Cargo capacity : {store.ships[props.id].cargo_capacity}</h5>
  <h5>Starship class: {store.ships[props.id].starship_class}</h5>

</span>
</div>)



};