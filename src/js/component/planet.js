import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Favorite } from "../../js/component/favorite.js";
import PropTypes from "prop-types";
import getState from "../store/flux";
import { Link } from "react-router-dom";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card-block mx-5" style={{ height: "500px" }}>
			<img src="https://picsum.photos/400/200" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Population:&nbsp; {props.population}</p>
				<p className="card-text">Terrain:&nbsp; {props.terrain}</p>
				<div className="container">
					<div className="row">
						<Link to="/demo">
							<div className="col-sm">
								<a href="#" className="btn btn-primary">
									Learn More
								</a>
							</div>
						</Link>
						<div className="col-sm">
							<Favorite name={props.name} />
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
	terrain: PropTypes.string
};
