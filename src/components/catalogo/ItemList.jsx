import React, { useContext } from "react";
import Item from './Item'
import { ProductContext } from "../context/productsContext";


function ItemList() {
		//Consumiendo FIRESTORE desde un contexto.
	const { products } = useContext(ProductContext)

    return (
        <>
		<Item data={products} />
        </>
    )
     
}

export default ItemList;