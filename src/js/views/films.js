import React, { useEffect, useContext, useState } from "react";
 import { Link } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { Header } from "../component/Header.jsx";


import { Context } from "../store/appContext";
import { Cards } from "../component/Cards.jsx";

import "../../styles/demo.css";
import "../../styles/cards.css";

const URL = "https://swapi.dev/api/";

const fav_films = [];

export const Films = () => {
  
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState("");

  const getfilms = async () => {
    
    setLoading(true);

    const response = await fetch(`${URL}films/`);
    const data = await response.json();

    actions.insertFilms(data);

    setLoading(false);
  };

  const filmes = store.films;
  //  const likedFilms = store.fav_people;

  useEffect(() => {
    filmes.length === 0 ?
    getfilms(): null;
  }, [getfilms]);


 

  return (
    <>
    <Header/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      {loading ? (
        <Spinner />
      ) : (
        filmes.map((film, index) => {
          return (
            <div key={index} className="container ml-8 d-flex my-10">
              <Cards
               
                image={`https://starwars-visualguide.com/assets/img/films/${
                  index + 1
                }.jpg`}
                title={film.title}
                text={film.director}
                // function={actions.insertfavFilms(filmes,index)}
              />
              <div className="d-flex flex-column">
              <button id="info" type="button" className="btn btn-outline ">More info...</button>
              <span className={"extraInfo "+ visible}>
                <h5>Produced by : {film.producer}</h5>
                <h5>Release date:{film.release_date}</h5>
                <h5>Episode id:{film.episode_id}</h5>
                <h5>Opening Crawl:</h5>
                <p>{film.opening_crawl}</p>
                
              </span>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};
