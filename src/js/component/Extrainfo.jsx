import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/cards.css";
import "../../styles/demo.css";

export const Moreinfo =(props)=>{

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
  <h5>Produced by : {store.films[props.id].producer}</h5>
  <h5>Release date: {store.films[props.id].release_date}</h5>
  <h5>episode_id : {store.films[props.id].episode_id}</h5>
  <h5>Opening Crawl : {store.films[props.id].opening_crawl}</h5>

</span>
</div>)



}