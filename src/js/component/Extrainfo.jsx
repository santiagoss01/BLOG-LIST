import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/cards.css";
import "../../styles/demo.css";

export const Moreinfo =(props)=>{

const[visible, setVisible] = useState(-1);
const {store, actions} = useContext(Context);





return (<div className="d-flex flex-column justify-content-arround">
<button onClick={(e)=>actions.setVisible(props.id)}  id="info" type="button" className="btn btn-outline ">More info...</button>
<span className={store.visible === props.id? "extraInfo "+ "": "extraInfo invisible"}>
  <h5>{store.films[props.id].producer}</h5>
  {/* <h5>{props.secondinfo}</h5>
  <h5>{props.thirdinfo}</h5>
  <h5>{props.fourthinfo}</h5>
  <p>{props.optional}</p>
   */}
</span>
</div>)



}