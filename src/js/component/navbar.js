import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Favorite } from "../component/favorite";

export const Navbar = () => {
	function handleClick(item) {
		let favorito_name = item.favorito_name;
		console.log(favorito_name);
		//actions.removeFavorite(item);
		actions.removeFavoritefetch(favorito_name);
		actions.getFavorites();
	}

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-dark bg-warning mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://e7.pngegg.com/pngimages/35/914/png-clipart-star-wars-letter-letter-star-wars.png"
						alt="Star Wars"
						width="90"
						height="43"
					/>
				</span>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites ({store.favorites.length})
				</button>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
					{store.favorites.map((item, index) => {
						return (
							<a className="dropdown-item" href="#" key={index}>
								{item.favorito_name}{" "}
								<i className="fas fa-trash-alt" key={index} onClick={() => handleClick(item)} />
							</a>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
