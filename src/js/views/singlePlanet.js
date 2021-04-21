import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let index = params.theid;

	// {store.demo[params.theid].title}
	return (
		<div className="container bg-dark">
			<div className="jumbotron jumbotron-fluid  bg-dark text-warning">
				<h1 className="display-4">
					{" "}
					<strong>{store.planets[index].name}</strong>{" "}
				</h1>
				<hr />
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<img
								src="https://popculturalstudies.files.wordpress.com/2020/01/star-wars-planets.png"
								width="600"
								height="400"
							/>
						</div>
						<div className="col-sm">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
				<hr className="my-4" />
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<p>
								<strong>Name: </strong>
							</p>
						</div>
						<div className="col-sm">
							<p>
								<strong>Climate: </strong>
							</p>
						</div>
						<div className="col-sm">
							<p>
								<strong>Population: </strong>
							</p>
						</div>
						<div className="col-sm">
							<p>
								<strong>Orbital Period: </strong>
							</p>
						</div>
						<div className="col-sm">
							<p>
								<strong>Rotation Period: </strong>
							</p>
						</div>
						<div className="col-sm">
							<p>
								<strong>Diameter: </strong>
							</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm">{store.planets[index].name}</div>
						<div className="col-sm">{store.planets[index].climate}</div>
						<div className="col-sm">{store.planets[index].population}</div>
						<div className="col-sm">{store.planets[index].orbital_period}</div>
						<div className="col-sm">{store.planets[index].rotation_period}</div>
						<div className="col-sm">{store.planets[index].diameter}</div>
					</div>
				</div>
				<hr />
				<Link to="/landing">
					<span className="btn btn-warning btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object,
	id: PropTypes.number
};
