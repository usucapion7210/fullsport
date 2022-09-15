import React from "react";
import { useState } from "react";
import estilos from "./itemCount.module.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial);

	const sumar = () => {
		if (count < stock) {
			setCount(count + 1);
		} else {
			alert("Ud. ha llegado al maximo disponible");
		}
	};
	const restar = () => {
		if (count !== initial) {
			setCount(count - 1);
		} else {
			alert("No hay stock disponible.");
		}
	};
	console.log(count);
	return (
		<div className={estilos.count}>
			<div className="contador">
				<button className="count_button" onClick={sumar}>
					Sumar
				</button>
				<span> {count} </span>
				<button className="count_button" onClick={restar}>
					Restar
				</button>
				{/* <button onClick={restar}>Restar</button> */}
			</div>

			<button
				className="count_button "
				onClick={() => {
					onAdd(count);
				}}>
				Agregar al carrito
			</button>
		</div>
	);
};
