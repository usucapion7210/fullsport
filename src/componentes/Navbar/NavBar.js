import React from "react";
import { CartWidget } from "../Cartwiget/CartWidget";
import { Nav } from "../nav/Nav";
import estilos from "./navbar.module.css";

const NavBar = () => {
	return (
		<div className={estilos.nav}>
			<Nav />
			<CartWidget />
		</div>
	);
};

export default NavBar;
