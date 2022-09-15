import React from "react";
import estilos from "./item.module.css";

const Item = ({ id, title, description, price, img }) => {
	return (
		<div className={estilos.item}>
			<span key={id}>{id}</span>
			<h3>{title}</h3>
			<img src={img} alt={title} style={{ width: "200px", height: "200px" }} />
			{/* <p>{description} </p> */}
			<h3>Precio $ {price} </h3>
		</div>
	);
};

export default Item;
