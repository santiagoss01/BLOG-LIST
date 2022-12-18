const URL = "https://swapi.dev/api/"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people : [],
			ships: [],
			films:[],
			planets:[],

		},
		actions: {
			 getfilms: async () =>{
				const response = await fetch(`${URL}films/`);
				const data = await response.json();
				
				setStore( {films: data.results,});
			 },
			 getpeople : async () =>{
				const response = await fetch(`${URL}people/`);
				const data = await response.json();
				setStore( {people: data.results,});},

			 getplanets : async () =>{
				const response = await fetch(`${URL}planets/`);
				const data = await response.json();
				setStore( {planets: data.results,});},

			 getships :  async () =>{
				const response = await fetch(`${URL}starships/`);
				const data = await response.json();
				setStore( {ships: data.results,});},

			
		}
	};
};

export default getState;
