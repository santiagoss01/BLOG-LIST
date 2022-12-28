import React, { useEffect, useContext, useState } from "react";
 import { Link } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";
import { Header } from "../component/Header.jsx";


import { Context } from "../store/appContext";
import { Cards } from "../component/Cards.jsx";
import { Moreinfo } from "../component/Extrainfo.jsx";

import "../../styles/demo.css";
import "../../styles/cards.css";
import { element } from "prop-types";

const URL = "https://swapi.dev/api/";

const fav_films = [];

export const Films = () => {
  
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);
 

  const getfilms = async () => {
    
    setLoading(true);

    const response = await fetch(`${URL}films/`);
    const data = await response.json();

    actions.insertFilms(data);

    setLoading(false);
  };

  const filmes = store.films;


  useEffect(() => {
    filmes.length === 0 ?
    getfilms(): null;
  }, []);

  const favorites = store.favorites;

  console.log(favorites);




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
                id={index}
              />
               <Moreinfo
               id={index}
                // firstinfo={film.producer}
                // secondinfo={film.release_date}
                // thirdinfo={film.episode_id}
                // fourthinfo="Opening Crawl:"
                // optional={film.opening_crawl}
              />
            </div>
          );
        })
      )}
    </>
  );
};
