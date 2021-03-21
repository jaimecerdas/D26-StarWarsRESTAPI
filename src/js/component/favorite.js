import React, { useState } from "react";

export const Favorite = () => {
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
		} else {
			setFavorite(isNotFavorite);
			setFavoriteColor(isNotFavoriteColor);
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
