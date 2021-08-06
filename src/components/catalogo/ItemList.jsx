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
			title: "PRODUCTO NUMERO UNO",
			description: "AAAAAAAAAAAAAA",
			price: "$150",
			pictureUrl: "url2",
        },
		{
			id: 1,
			title: "titulo",
			description: "string",
			price: "string",
			pictureUrl: "url",
        },
		{
			id: 1,
			title: "titulo",
			description: "string",
			price: "string",
			pictureUrl: "url",
        },
		{
			id: 1,
			title: "titulo",
			description: "string",
			price: "string",
			pictureUrl: "url",
        },
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
		<div className="row">
			<div className="in-sm-12 in-md-8 in-lg-8">
				<div className="row">
					<Item data={products} />
				</div>
			</div>
			<div className="in-sm-12 in-md-4 in-lg-4">
			  
			</div>
		</div>
		
        </>
    )
     
}

export default ItemList;