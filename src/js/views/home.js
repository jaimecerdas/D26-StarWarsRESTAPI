import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Person } from "../../js/component/person.js";
import { Planet } from "../../js/component/planet.js";
import PropTypes from "prop-types";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople();
		actions.loadPlanets();
		//console.log(store.people);
	}, []);

	return (
		<div className="container">
			<h1>Caracters</h1>
			<hr />
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				{store.people.map((item, index) => {
					return (
						<Person
							key={item.index}
							id={index}
							name={item.name}
							gender={item.gender}
							eyeColor={item.eye_color}
							hairColor={item.hair_color}
						/>
					);
				})}
			</div>
			<h1>Planets</h1>
			<hr />
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
				{store.planets.map((item, index) => {
					return <Planet name={item.name} population={item.population} key={index} terrain={item.terrain} />;
				})}
			</div>
		</div>
	);
};
