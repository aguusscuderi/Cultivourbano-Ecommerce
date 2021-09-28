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

    /*let { categoryId } = useParams()
    
    const getCategory = async () => {
      console.log(categoryId)
      const categoryCollection = collection(getData(), 'productos');
      const categoryQuery = query(categoryCollection, where('categoryId', '==', `${categoryId}`));
      try {
        const categorySnapshot = await getDocs(categoryQuery);
        const categoryList = categorySnapshot.docs.map(doc => ({
          categoryId: doc.categoryId,
          ...doc.data()
        }));
        console.log({ categoryList });
        //setProducts(categoryList)
      } catch (e) {
        console.log(e);
      }
    }*/

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
    <ProductContext.Provider  value={{ products, /*getCategory*/ }}>
        {children}
    </ProductContext.Provider>
    {loading === true ? <Spinner/> : ''}
    </>
}

