import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/cards.css";
import "../../styles/demo.css";

export const Moreinfoplanets =(props)=>{

const[visible, setVisible] = useState(-1);
const {store, actions} = useContext(Context);





return (<div className="d-flex flex-column justify-content-arround">
<button onClick={(e)=>actions.setVisible(props.id)}  id="info" type="button" className="btn btn-outline ">More info...</button>
<button
        onClick={(e) => actions.setVisible(-1)}
        id="info"
        type="button"
        className="btn"
      >
       ...Show less
      </button>
<span className={store.visible === props.id? "extraInfo "+ "": "extraInfo invisible"}>
  <h5>Rotation period : {store.planets[props.id].rotation_period}</h5>
  <h5>Terrain : {store.planets[props.id].terrain}</h5>
  <h5>Gravity : {store.planets[props.id].gravity}</h5>
  <h5>Climate : {store.planets[props.id].climate}</h5>

</span>
</div>)



};