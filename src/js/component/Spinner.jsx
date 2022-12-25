import { BiPlanet} from "react-icons/bi";
import React from "react";
import "../../styles/spinner.css";

export const Spinner =()=>{

return(
    
    <div id="Spinner_container" className=" d-flex flex-column text-center justify-content-center align-items-center">

<BiPlanet className="Spinner "/>
<br />
<br />
<br />
<h6>Loading...</h6>
</div>

)

};