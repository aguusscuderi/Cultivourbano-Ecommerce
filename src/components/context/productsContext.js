import { createContext, useEffect } from "react";
import { useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { getData } from '../../firebase/index'
import { useParams } from 'react-router-dom'
import Spinner from '../otros/Spinner'

export const ProductContext = createContext([])

export default function ProductsApi ({ children }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
          setLoading(true)
    const productCollection = collection(getData(), 'productos')
    const productsSnapshot = await getDocs(productCollection)
    const productList = productsSnapshot.docs.map(doc => ({
              idFire: doc.id,
      ...doc.data()
    }));
      
    setProducts(productList)
          setLoading(false)
    }

    useEffect(() => {
		  getProducts()
    }, [])

    return <>
    <ProductContext.Provider  value={{ products, setProducts, getProducts}}>
        {children}
    </ProductContext.Provider>
    {loading === true ? <Spinner/> : ''}
    </>
}

