import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineRocket} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import { BiPlanet} from "react-icons/bi";
import { BiFilm} from "react-icons/bi";
import { useNavigate } from "react-router-dom";






import "../../styles/home.css";



export const Header = () => {
    const navigate = useNavigate();
	return(	
<div className="d-flex flex-column align-items-center ">
<img onClick={()=>navigate("/")} className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1388px-Star_Wars_Logo.svg.png"/>     	
<nav  className="navbar  d-flex ">
  <button onClick={()=>navigate("/ships")} className="navbar-brand icon" href="#">
    <AiOutlineRocket/> ships </button>
    <button onClick={()=>navigate("/people")} className="navbar-brand icon" href="#">
    <AiOutlineUser/> characters</button>
    <button onClick={()=>navigate("/planets")} className="navbar-brand icon" href="#">
    <BiPlanet/> planets </button>
    <button onClick={()=>navigate("/films")} className="navbar-brand icon" href="#">
    <BiFilm/> films </button>

</nav>
</div>
)
;}
