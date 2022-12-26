const URL = "https://swapi.dev/api/"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people : [],
			fav_people:[],
			ships: [],
			fav_ships:[],
			films:[],
			fav_films:[],
			planets:[],
			fav_planets:[],
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
			//   insertfavFilms:(fl)=>{
			// 	setStore({fav_films: getStore().fav_films.concat(fl.title)});
			//   }

			
		}
	};
};

export default getState;
