import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
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
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
