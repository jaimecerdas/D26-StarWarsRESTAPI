import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Favorite = props => {
	const { store, actions } = useContext(Context);
	const isFavorite = "fas fa-check";
	const isNotFavorite = "far fa-heart";
	const isFavoriteColor = "btn btn-success";
	const isNotFavoriteColor = "btn btn-outline-primary";
	const [favorite, setFavorite] = useState(isNotFavorite);
	const [favoriteColor, setFavoriteColor] = useState(isNotFavoriteColor);

	function handleClick() {
		if (favorite == isNotFavorite) {
			setFavorite(isFavorite);
			setFavoriteColor(isFavoriteColor);
			actions.addFavorite(props.name);
			console.log(store.favorites);
		} else {
			setFavorite(isNotFavorite);
			setFavoriteColor(isNotFavoriteColor);
			actions.removeFavorite(props.name);
			console.log(store.favorites);
		}
	}

	return (
		<div className="col-sm">
			<button type="button" className={favorite} onClick={handleClick}>
				<i className={favoriteColor} />
			</button>
		</div>
	);
};

Favorite.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string
};
