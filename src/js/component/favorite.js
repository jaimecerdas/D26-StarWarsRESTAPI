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
			actions.addFavorite(props.name);
			//console.log(store.favorites);
		} else {
			setFavorite(isNotFavorite);
			setFavoriteColor(isNotFavoriteColor);
			actions.removeFavorite(props.name);
			//console.log(store.favorites);
		}
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
	uid: PropTypes.string
};
