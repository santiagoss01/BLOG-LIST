import React, { useContext } from "react";

import { Context } from "../store/appContext";
import "../../styles/home.css";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export const FavoritesList = () => {
  
 const { store, actions } = useContext(Context);
  
 const favorites = store.favorites;

  const handleClick = (title) => {
    actions.deleteFavorites(title);
  };

  return (
    <div className="d-flex">
    <div className="dropdown">
      <button
        className="button dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/* <span className="badge rounded-pill">
          {favorites.length}
        </span> */}
       <AiFillHeart/>
        Favorites
      </button>
      <ul className="dropdown-menu dropdown-menu-warning dropdown-menu-end">
      {!favorites.length && (
        <li className="dropdown-item">Add your favorites</li>
      )}
      {favorites.map((fav, i) => (
        <li
          key={i}
          className="dropdown-item d-flex justify-content-around align-items-center"
        >
          <span>{fav.title}</span>
        <button id="delete"><AiOutlineClose onClick={() => handleClick(fav.title)}/></button> 
        </li>
      ))}
    </ul>

    </div>

    </div>
  );
};