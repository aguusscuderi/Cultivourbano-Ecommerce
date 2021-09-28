import React, {  useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ProductContext } from "../context/productsContext"
import ItemDetail from './ItemDetail'
import { useContext } from "react/cjs/react.development"

export default function ItemDetailContainer() {
    const [ thisProductContext, setThisProductContext ] = useState([])
    const { products } = useContext(ProductContext)
   
    const { idFire } = useParams()
    
    const getItemFromContext = async () => {
        try {await new Promise((resolve, reject) => {resolve(products.filter((el) => el.idFire === idFire))})
            .then((product) => {
                setThisProductContext(product[0])
            })
        } 
        catch(error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        getItemFromContext()
    }, [])


    return(
        <>
        <ItemDetail {...thisProductContext}/>
        </>
    )
}