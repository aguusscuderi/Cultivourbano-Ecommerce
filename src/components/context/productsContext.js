import { createContext, useEffect } from "react";
import { useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { getData } from '../../firebase/index'


export const ProductContext = createContext([])

export default function ProductsApi ({children}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
			const productCollection = collection(getData(), 'productos')
			const productsSnapshot = await getDocs(productCollection)
			const productList = productsSnapshot.docs.map(doc => ({
                idFire: doc.id,
				...doc.data()
			}));
            
			console.log(productList)
			setProducts(productList)
		}

		getProducts()
    }, [])

    return <ProductContext.Provider  value={{ products }}>
        {children}
    </ProductContext.Provider>
}

