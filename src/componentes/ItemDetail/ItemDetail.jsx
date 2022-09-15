import React from "react";
import estilos from "../ItemDetail/Itemdetail.module.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
	const onAdd = (cantidad) => {
		console.log(`<h2> Ud. ha agregdo productos a su carrito ${cantidad} </h2>`);
	};

	console.table(item);

	return (
		<div className={estilos.itemdetail}>
			<h2> {item.title} </h2>
			<img src={item.img} alt={item.title} />
			<p> {item.description} </p>
			<h3> Precio: $ {item.price} </h3>
			<span>stock: {item.stock} </span>
			<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
		</div>
	);
};
