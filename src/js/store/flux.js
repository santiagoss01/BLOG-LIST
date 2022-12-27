const URL = "https://swapi.dev/api/"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people : [],
			favorites:[],
			ships: [],
			films:[],
			planets:[],
			
			next_page:"",

		},
		actions: {

			insertFilms: (data) => {        
				setStore({ films: getStore().films.concat(data.results), next_page: data.next });
			  },
			  
			  insertPeople:(data) => {        
				setStore({ people: getStore().people.concat(data.results), next_page: data.next });
			  },
			 
			  insertPlanets:(data) => {        
				setStore({ planets: getStore().planets.concat(data.results), next_page: data.next });
			  },

			  insertShips:(data) => {        
				setStore({ ships: getStore().ships.concat(data.results), next_page: data.next });
			  },
			
			  insertFavorites:(data) => {        
				setStore({ favorites: getStore().favorites.concat(data)});
			  },
				
			 }

			
		}
	};

export default getState;
