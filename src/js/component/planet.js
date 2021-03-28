import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Favorite } from "../../js/component/favorite.js";
import PropTypes from "prop-types";
import getState from "../store/flux";
import { Link } from "react-router-dom";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card-block mx-5 bg-dark text-white" style={{ height: "425px" }}>
			<img
				src="https://static3.srcdn.com/wordpress/wp-content/uploads/2019/08/Star-Wars-Planets-fEature-Collage.jpg"
				width="400"
				height="200"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Population:&nbsp; {props.population}</p>
				<p className="card-text">Terrain:&nbsp; {props.terrain}</p>
				<div className="container">
					<div className="row">
						<Link to={"/singlePlanet/" + props.id}>
							<div className="col-sm">
								<a href="#" className="btn btn-warning">
									Learn More
								</a>
							</div>
						</Link>
						<div className="col-sm">
							<Favorite name={props.name} uid={props.id} key={props.key} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Planet.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	id: PropTypes.string,
	key: PropTypes.number
};
