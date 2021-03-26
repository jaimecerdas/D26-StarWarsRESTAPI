import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let index = params.theid;

	// {store.demo[params.theid].title}
	return (
		<div className="jumbotron jumbotron-fluid">
			<h1 className="display-4">
				{" "}
				<strong>{store.people[index].name}</strong>{" "}
			</h1>

			<div className="container">
				<div className="row">
					<div className="col-sm">
						<img src="https://picsum.photos/800/600" />
					</div>
					<div className="col-sm">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>
			<hr className="my-4" />
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<p>
							<strong>Birth Year: </strong>
						</p>
					</div>
					<div className="col-sm">
						<p>
							<strong>Gender: </strong>
						</p>
					</div>
					<div className="col-sm">
						<p>
							<strong>Height: </strong>
						</p>
					</div>
					<div className="col-sm">
						<p>
							<strong>Skin Color: </strong>
						</p>
					</div>
					<div className="col-sm">
						<p>
							<strong>Eye Color: </strong>
						</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<p>{store.people[index].birth_year}</p>
					</div>
					<div className="col-sm">{store.people[index].gender}</div>
					<div className="col-sm">{store.people[index].height}</div>
					<div className="col-sm">{store.people[index].skin_color}</div>
					<div className="col-sm">{store.people[index].eye_color}</div>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object,
	id: PropTypes.string
};
