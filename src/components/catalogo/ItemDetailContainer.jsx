import React, {  useState, useEffect } from "react"
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [thisProduct, setThisProduct] = useState([])

    const item = [{
			id: 1,
			title: "Kit luces de SODIO 400w",
			description: "Excelente kit de luces importadas, Incluye: Balastro, 2x Luz sodio 400w, Temporizador",
			price: "$10.750",
			pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_669295-MLA31112571726_062019-O.jpg",
        }]

    const getItem = async () => {
        try{await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item)
            }, 2000)
        })
        .then((product) => {
            setThisProduct(product)
        })
    
    }catch(error){
            console.log('error', error)
        }
    }

    useEffect(() => {
        getItem()
    }, [])


    return(
        <ItemDetail item={thisProduct}/>
    )
}