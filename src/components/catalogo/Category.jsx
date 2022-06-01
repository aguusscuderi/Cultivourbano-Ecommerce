import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/productsContext"
import { Link, useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { getData } from '../../firebase/index'
import Item from "./Item"

export default function Category (props) {
    const [value, setValue] = useState(String)
    const [categoryProduct, setCategoryProduct] = useState({})

    const categoryId = props.categoryItemId
    console.log(categoryId, 'entre al componente')
    
    
    const changeCategory = () => {
        const categoryValue = document.querySelector('#category').value.toString()
        setValue(categoryValue)
    }
    
    const getCategory = async (categoria) => {
        console.log(categoria, 'entre a la funcion como parametro')
        const categoryCollection = collection(getData(), 'productos');
        const categoryQuery = query(categoryCollection, where('categoryId', '==', `${categoria}`));
        try {
          const categorySnapshot = await getDocs(categoryQuery);
          const categoryList = categorySnapshot.docs.map(doc => ({
            categoryId: doc.categoryId,
            ...doc.data()
          }));
          console.log(categoryList)
          setCategoryProduct(categoryList)
          console.log(categoryProduct)
        } catch (e) {
          console.log(e);
        }
      
    
    }

    useEffect(()=> {
        console.log(value)
    }, [value])

    return(
        <div className="category-form">
            <select onChange={ changeCategory } name="category" id="category">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <Link to={`/products/category/${ value }`}> <div className="category_button" onClick={() => { getCategory(categoryId) }}> Buscar </div> </Link>
        </div>
    )
}