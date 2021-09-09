import React, { useContext } from "react";
import productsJson from './productsJson'
import Item from './Item'
import { CartContext } from '../context/cartContext'
import { ProductContext } from "../context/productsContext";


function ItemList() {
	//const [products, setProducts] = useState([]);

	const { cart } = useContext(CartContext)
	console.log(cart)

	//Consumiendo FIRESTORE desde un contexto.
	const { products } = useContext(ProductContext)
	console.log(products)

	/*useEffect(() => {
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
	}, []);*/

	/*useEffect(() => {
		const getProducts = async () => {
			const productCollection = collection(getData(), 'productos')
			const productsSnapshot = await getDocs(productCollection)
			const productList = productsSnapshot.docs.map(doc => ({
				...doc.data()
			}));
			console.log(productList)
			setProducts(productList)
		}

		getProducts()
	}, [])*/

    return (
        <>
		<Item data={products} />
        </>
    )
     
}

export default ItemList;