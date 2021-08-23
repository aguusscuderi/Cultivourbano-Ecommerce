import React, { useState, useEffect } from "react";
import productsJson from './productsJson'
import Item from './Item'

function ItemList() {
	const [products, setProducts] = useState([]);

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