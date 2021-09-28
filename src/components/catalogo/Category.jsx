import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/productsContext"
import { Link } from 'react-router-dom'

export default function Category () {
    const [value, setValue] = useState(String)

   /* const { getCategory } = useContext(ProductContext) */

    const changeCategory = () => {
        const category = document.querySelector('#category').value.toString()
        setValue(category)
    }
    
    useEffect(()=> {
        //console.log(value)
    }, [value])

    return(
        <div className="category-form">
            <select onChange={ changeCategory } name="category" id="category">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <Link to={`/products/category/${ value }`}> <div className="category_button" onClick={() => { /*getCategory()*/ }}> Buscar </div> </Link>
        </div>
    )
}