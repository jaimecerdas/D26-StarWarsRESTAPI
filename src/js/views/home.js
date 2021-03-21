import React from "react";
import "../../styles/home.scss";
import { Person } from "../../js/component/person.js";
import { Planet } from "../../js/component/planet.js";

export const Home = () => (
	<div className="container">
		<h1>Caracters</h1>
		<hr />
		<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
			<Person />
			<Person />
			<Person />
			<Person />
			<Person />
			<Person />
		</div>

		<h1>Planets</h1>
		<hr />
		<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
			<Planet />
			<Planet />
			<Planet />
			<Planet />
		</div>
	</div>
);
