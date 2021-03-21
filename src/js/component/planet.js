import React from "react";
import { Favorite } from "../../js/component/favorite.js";

export const Planet = () => {
	return (
		<div className="card-block mx-5" style={{ height: "500px" }}>
			<img src="https://via.placeholder.com/400x200" />
			<div className="card-body">
				<h5 className="card-title">Alderan</h5>
				<p className="card-text">Population:</p>
				<p className="card-text">Terrain:</p>
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<a href="#" className="btn btn-primary">
								Learn More
							</a>
						</div>
						<div className="col-sm">
							<Favorite />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
