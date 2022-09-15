import React from "react";
import { productos } from "../../mok/productos";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import estilos from "../ItemDetailContainer/detailcontainer.module.css";

export const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	console.log(`soy setitem de producto`);
	useEffect(() => {
		const getProduct = () =>
			new Promise((resolve, reject) => {
				const producto = productos.find((p) => p.id === "1");
				setTimeout(() => resolve(producto), 2000);
			});
		getProduct()
			.then((producto) => setItem(producto))
			.catch((data) => {
				console.log(data);
			});
	}, []);

	return (
		<div className={estilos.icontainer}>
			<ItemDetail item={item} />
		</div>
	);
};
