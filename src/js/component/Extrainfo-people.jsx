import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/cards.css";
import "../../styles/demo.css";

export const Moreinfopeople = (props) => {
  const [visible, setVisible] = useState(-1);
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex flex-column justify-content-arround">
      <button
        onClick={(e) => actions.setVisible(props.id)}
        id="info"
        type="button"
        className="btn"
      >
        More info...
      </button>
      <button
        onClick={(e) => actions.setVisible(-1)}
        id="info"
        type="button"
        className="btn"
      >
       ...Show less
      </button>

      <span
        className={
          store.visible === props.id ? "extraInfo " + "" : "extraInfo invisible"
        }
      >
        <h5>Name: {store.people[props.id].name}</h5>
        <h5>Character details are being fixed and wil be bringed to you soon!, may the force be with you.</h5>
        {/* <h5>Height : {store.people[props.id].height}</h5>
        <h5>Mass : {store.people[props.id].mass}</h5>
        <h5>Eye color : {store.people[props.id].eye_color}</h5> */}
      </span>
    </div>
  );
};
