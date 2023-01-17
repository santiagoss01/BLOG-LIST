const URL = "https://swapi.dev/api/"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people : [],
			favorites:[],
			ships: [],
			films:[],
			planets:[],
			visible:-1,
			
			next_page:[],

			

		},
		actions: {

			setVisible:(index)=>{
				
				setStore({visible: index})
			
				
				
			 },



			insertFilms: (data) => {        
				setStore({ films: getStore().films.concat(data.results)});
			  },
			  
			  insertPeople:(data) => {        
				setStore({ people: getStore().people.concat(data.results), next_page: data.next});
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
			 
			  deleteFavorites: (title) => {
				setStore({
				  favorites: getStore().favorites.filter((fav) => fav.title !== title),
				});
			  },
				
			 }
			

			
		}
	};

export default getState;
