import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<Link to="/register" className="btn btn-success">
				Register!
			</Link>
			<Link to="/login" className="btn btn-primary">
				Log In
			</Link>
		</div>
	);
};
