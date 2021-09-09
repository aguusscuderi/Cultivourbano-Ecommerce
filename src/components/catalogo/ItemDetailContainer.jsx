import React, {  useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ProductContext } from "../context/productsContext"
import productsJson from './productsJson'
import ItemDetail from './ItemDetail'
import { useContext } from "react/cjs/react.development"

export default function ItemDetailContainer() {
    //const [thisProduct, setThisProduct] = useState([])
    const [thisProductContext, setThisProductContext] = useState([])
    const { products } = useContext(ProductContext)
   
    console.log(products, 'Llegando al detalle :D desde Firebase y Context.')

    const { idFire } = useParams()

   /* const getItem = async () => {
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
    }*/

    const getItemFromContext = async () => {
        try{await new Promise((resolve, reject) => {
            resolve(products.filter((el) => el.idFire === idFire))
        })
        .then((product) => {
            setThisProductContext(product[0])
            console.log(product, 'El producto :D')
        })
    }catch(error){
            console.log('error', error)
        }
    }

    useEffect(() => {
        //getItem()
        getItemFromContext()
    }, [])


    return(
        <>
        <ItemDetail {...thisProductContext}/>
        </>
    )
}