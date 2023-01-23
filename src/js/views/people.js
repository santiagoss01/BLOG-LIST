import React, { useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";

import { Context } from "../store/appContext";
import { Header } from "../component/Header.jsx";
import { Moreinfopeople } from "../component/Extrainfo-people.jsx";

import "../../styles/demo.css";

import { Cards } from "../component/Cards.jsx";
import propTypes from "prop-types";

// let URL = "https://swapi.dev/api/";

export const People = () => {



  const { store, actions } = useContext(Context);

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState("");

  const getPeople = async (url) => {

    setLoading(true);

    const response = await fetch(url);
    const data = await response.json();

    actions.insertPeople(data);

    setLoading(false);
  };

  const characters = store.people;

  useEffect(() => {
    getPeople(`https://www.swapi.tech/api/people`);
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        characters.map((char, index) => {
          return (
            <div key={index} className="container ml-8 d-flex my-10">
              <Cards image={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                title={char.name}
                id={index}
              />
              <Moreinfopeople 
               id={index} />
            </div>
          );
        })
      )}
      <div className="text-center my-4">
        <button
          type="button"
          className={`btn btn-warning shadow-sm ${
            !store.next_page || loading == true ? "invisible" : ""
          }`}
          onClick={() => getPeople(store.next_page)}
        >
          Show More <i className="fas fa-long-arrow-alt-down ms-1"></i>
        </button>
      </div>
    </>
  );
};
