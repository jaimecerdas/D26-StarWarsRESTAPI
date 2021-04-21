import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Favorite } from "../../js/component/favorite.js";
import PropTypes from "prop-types";
import getState from "../store/flux";
import { Link } from "react-router-dom";

export const Person = props => {
	const { store, actions } = useContext(Context);
	let index = 0;

	return (
		<div className="card-block mx-5  bg-dark text-white" style={{ height: "425px" }}>
			<img
				src="https://cdn02.plentymarkets.com/g0dvqlm68way/item/images/607/full/607---1.jpg"
				width="400"
				height="200"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Gender: &nbsp;
					{props.gender}
				</p>
				<p className="card-text">
					Hair Color: &nbsp;
					{props.hairColor}
				</p>
				<p className="card-text">
					Eye-Color: &nbsp;
					{props.eyeColor}
				</p>

				<div className="container">
					<div className="row">
						<Link to={"/single/" + props.id}>
							<div className="col-sm">
								<a href="#" className="btn btn-warning">
									Learn More
								</a>
							</div>
						</Link>
						<div className="col-sm">
							<Favorite name={props.name} uid={props.id} key={props.id} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Person.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	key: PropTypes.number,
	gender: PropTypes.string,
	eyeColor: PropTypes.string,
	hairColor: PropTypes.string,
	id: PropTypes.number
};
