import React, {  useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import productsJson from './productsJson'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [thisProduct, setThisProduct] = useState([])

    const { id } = useParams()

    const getItem = async () => {
        try{await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsJson.filter((el) => el.id === id))
            }, 2000)
        })
        .then((product) => {
            setThisProduct(product[0])
        })
    
    }catch(error){
            console.log('error', error)
        }
    }

    useEffect(() => {
        getItem()
    }, [])


    return(
        <ItemDetail {...thisProduct}/>
    )
}