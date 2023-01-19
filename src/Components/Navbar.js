import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import profilePicPath from "../img/profile.png";
const Navbar = () => {
	return (
		<nav className="flex items-center justify-between h-12 ">
			<Route to="/home">
				<div className="flex items-center justify-between w-48 h-full aspect-square ">
					<div className="relative mx-2 overflow-hidden rounded-full h-4/5 aspect-square">
						<img
							className="absolute inline-block w-full -translate-x-1/2 -translate-y-5 left-1/2 top-1/2"
							src={profilePicPath}
							alt="profile pic"
						/>
					</div>
					<p className="font-bold">OSAMA SHAIKH</p>
				</div>
			</Route>
			<ul className="flex ">
				<li className="mx-2 text-xs font-bold">
					<NavLink activeClassName="text-sky-500 underline" to="/home">
						Home
					</NavLink>
				</li>

				<li className="mx-2 text-xs font-bold">
					<NavLink activeClassName="text-sky-500 underline" to="/about">
						About
					</NavLink>
				</li>
				<li className="mx-2 text-xs font-bold">
					<NavLink activeClassName="text-sky-500 underline" to="/projects">
						Projects
					</NavLink>
				</li>
				<li className="mx-2 text-xs font-bold">
					<NavLink activeClassName="text-sky-500 underline" to="/achievements">
						Achievements
					</NavLink>
				</li>
				<li className="mx-2 text-xs font-bold">
					<NavLink activeClassName="text-sky-500 underline" to="/contact">
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
