import React from "react";
import estilos from "./navbar.module.css";

const NavBar = () => {
	return (
		<div className={estilos.nav}>
			<h1>Full Sports</h1>
			<nav>
				<ul>
					<li>
						<a href="https://www.google.es/">Camisetas</a>
					</li>
					<li>
						<a href="https://www.google.es/">Gorras</a>
					</li>
					<li>
						<a href="https://www.google.es/">Shorts</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
