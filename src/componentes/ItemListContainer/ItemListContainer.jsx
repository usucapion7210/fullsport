import React from "react";
// import { ItemCount } from "../ItemCount/ItemCount";
import estilos from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { productos } from "../../mok/productos.js";

const ItemListContainer = (props) => {
	// };

	const [items, setItems] = useState([]);
	// console.log(`me renderizo siempre.....`);
	useEffect(() => {
		const getproducts = () =>
			new Promise((resolve, reject) => {
				setTimeout(() => resolve(productos), 2000);
				// console.log(`ya me renderice`);
			});

		getproducts()
			.then((productos) => setItems(productos))
			.catch((data) => {
				console.error(data);
			});
		// console.warn(`me renderizo una sola vez`);
	}, []);
	// console.table(items);
	return (
		<div className={estilos.main}>
			<h1> {props.saludo} </h1>
			<ItemList items={items} />
			{/* <ItemCount stock={10} initial={1} onAdd={onAdd} /> */}
		</div>
	);
};
export default ItemListContainer;
