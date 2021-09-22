import { useState } from "react"
import { getData } from '../../firebase/index'
import { collection, doc, setDoc } from "firebase/firestore";
import { CartContext } from '../context/cartContext'
import { useContext } from 'react'
import { Timestamp } from "@firebase/firestore";
import CartForm from './CartForm'
import BoughtSuccess from "./successBought";


export default function CartFormLog (props) {
    const [loading, setLoading] = useState(true)
    const [orderId, setOrderId] = useState('')
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        email: '',
        telefono: '',
        direccion: ''
    })

    const { cart } = useContext(CartContext)

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setDatos({ ...datos,[name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

            const db = getData()
            const orderCollections = doc(collection(db, 'orders'))
           
            const order = {
                buyer: {
                    nombre: datos.nombre,
                    apellido: datos.apellido,
                    dni: datos.dni,
                    email: datos.email,
                    telefono: datos.telefono,
                    direccion: datos.direccion,
                },
                productos: {
                    ...cart
                },
                precioFinal: props.finalPrice,
                fecha: Timestamp.fromDate(new Date())
            }
    
            const orderReference = await setDoc(orderCollections, order)
        
            setOrderId(orderCollections._key.path.segments[1])
            setLoading(false)
    }

    return(
        <>
        {cart.length>0 ? <CartForm handleSubmit={handleSubmit} handleChange={handleChange}/> : ''}
        {loading == false ? <BoughtSuccess orderId={orderId}/> : ''}
        </>
    )
}