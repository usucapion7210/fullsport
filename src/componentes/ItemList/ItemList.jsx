import React from "react";
import Item from "../Item/Item";
import estilos from "./itemlist.module.css";
const ItemList = ({ items }) => {
	console.table(items);
	return (
		<div className={estilos.itemlist}>
			{items.map((p) => (
				<Item
					key={p.id}
					title={p.title}
					img={p.img}
					price={p.price}
					description={p.description}
					category={p.category}
					stock={p.stock}
				/>
			))}

			{/* <Item id ={id} title={title} description = {description} price={price} img={img}  /> */}
		</div>
	);
};

export default ItemList;
