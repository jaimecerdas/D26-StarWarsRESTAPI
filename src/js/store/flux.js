const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peopleDetail: [],
			planets: [],
			cardDetailCharacter: [],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			loadFavorites: newFavorite => {
				Favorite.updateFavorite(newFavorite);
			},
			addFavorite: newFavorite => {
				const store = getStore();
				let newArray = store.favorites;
				newArray.push(newFavorite);
				const fav = (newArray, newFavorite) => {
					newArray.push(newFavorite);
					return newArray;
				};

				setStore({ favorites: newArray });
			},

			removeFavorite: newFavorite => {
				const store = getStore();
				let newArray = store.favorites;
				function arrayRemove(arr, value) {
					return arr.filter(function(ele) {
						return ele != value;
					});
				}
				let result = arrayRemove(newArray, newFavorite);
				//loadFavorites(newFavorite);
				setStore({ favorites: result });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadPeople: () => {
				fetch("https://3000-azure-hummingbird-8q4vaq07.ws-us03.gitpod.io/people")
					.then(res => res.json())
					.then(async data => {
						let arrayResults = data;
						console.log(arrayResults);
						setStore({ people: arrayResults });
					});
			},
			loadPlanets: () => {
				fetch("https://3000-azure-hummingbird-8q4vaq07.ws-us03.gitpod.io/planets")
					.then(res => res.json())
					.then(async data => {
						let arrayResults = data;
						console.log(arrayResults);
						setStore({ planets: arrayResults });
					});
			}
			/*loadPerson: async url => {
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(`${url}`, config);
				.then(res => res.json())
                .then(data => data.results)
                .then(data => setStore({ peopleDetail: data.result }))
                .then(console.log(peopleDetail.results))
                .catch(err => console.error(err));
				const json = await response.json();
				//console.log("--json--", json);
				setStore({ peopleDetail: json.result.properties });
			},
			// Fetch Card Detail
			fetchCardDetail: async url => {
				console.log("---Flux---", url);
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(`${url}`, config);
				const json = await response.json();
				console.log("--json--", json);
				setStore({ cardDetailCharacter: json.result.properties });
			}*/
		}
	};
};

export default getState;
