import React from "react";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import ItemListConainer from "../ItemListContainer/ItemListContainer";

export const Main = () => {
	return (
		<div>
			<ItemListConainer saludo="Bienvenidos a Full sport." />

			<ItemDetailContainer />
		</div>
	);
};
