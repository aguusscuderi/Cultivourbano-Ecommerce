import React, { useState, useEffect } from "react";
import Item from './Item'

function ItemList() {
	const [products, setProducts] = useState([]);

	const dataProducts = [
		{
			id: 1,
			title: "titulo",
			description: "string",
			price: "string",
			pictureUrl: "url",
        },
        {
			id: 2,
			title: "titulo2",
			description: "string2",
			price: "string2",
			pictureUrl: "url2",
        }
	];

	useEffect(() => {
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(dataProducts);
			}, 3000);
		})
            .then((eachProduct) => {
                console.log("data Resolve", eachProduct);
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