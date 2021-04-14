import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		// fetch de LOGIN
		fetch("https://3000-chocolate-gull-dc27k5e3.ws-us03.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				// añadir token a session
				let msg = data.msg;
				if (msg === "Invalid username or password") {
					window.alert(msg + " please login again.");
				} else {
					setAuth(true);
					sessionStorage.setItem("my_token", data.token);
				}
				// let token = sessionStorage.getItem("my_token")
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h1 className="text-white">Login</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label text-white">
						Email address
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text text-white">
						Well never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label text-white">
						Password
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<button type="submit" className="btn btn-secondary">
					Submit
				</button>
			</form>
			{auth ? <Redirect to="/" /> : null}
		</div>
	);
};
