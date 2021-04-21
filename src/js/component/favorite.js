import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Favorite = props => {
	const { store, actions } = useContext(Context);
	const isFavorite = "fas fa-check";
	const isNotFavorite = "far fa-heart";
	const isFavoriteColor = "btn btn-outline-warning";
	const isNotFavoriteColor = "btn btn-outline-warning";
	const [favorite, setFavorite] = useState(isNotFavorite);
	const [favoriteColor, setFavoriteColor] = useState(isNotFavoriteColor);

	function updateFavorite(name) {
		const favoriteList = store.favorites;
		let n = favoriteList.includes(name);
		if (n === false) {
			setFavorite(isNotFavorite);
			setFavoriteColor(isNotFavoriteColor);
		}
	}

	function handleClick() {
		if (favorite == isNotFavorite) {
			setFavorite(isFavorite);
			setFavoriteColor(isFavoriteColor);
			//actions.addFavorite(props.name);
			let favorito_name = props.name;
			console.log(favorito_name);
			actions.addFavoritefetch(favorito_name);
			//console.log(store.favorites);
			refreshFavorites();
		} else {
			setFavorite(isNotFavorite);
			setFavoriteColor(isNotFavoriteColor);
			//actions.removeFavorite(props.name);
			let favorito_name = props.name;
			actions.removeFavoritefetch(favorito_name);
			//console.log(store.favorites);
			refreshFavorites();
		}
	}

	function wait(ms) {
		return new Promise(r => setTimeout(r, ms));
	}
	async function refreshFavorites() {
		await wait(500);
		actions.getFavorites();
		return console.log("Favorites loaded successfully");
	}

	return (
		<div className="col-sm">
			<button type="button" className={favoriteColor} onClick={handleClick}>
				<i className={favorite} />
			</button>
		</div>
	);
};

Favorite.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.number
};
