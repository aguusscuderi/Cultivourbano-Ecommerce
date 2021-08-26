import React, { useState, useEffect, useContext } from "react";
import productsJson from './productsJson'
import Item from './Item'
import { CartContext } from '../context/cartContext'

function ItemList() {
	const [products, setProducts] = useState([]);

	const isDark = useContext(CartContext)

	console.log(isDark)

	useEffect(() => {
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productsJson);
			}, 3000);
		})
            .then((eachProduct) => {
				setProducts(eachProduct);
			})
			.catch((error) => {
				console.log("err", error);
			});
	}, []);

    return (
        <>
		<Item data={products} />
        </>
    )
     
}

export default ItemList;