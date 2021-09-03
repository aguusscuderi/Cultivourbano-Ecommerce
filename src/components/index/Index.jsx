import Carrousel from './Carrousel'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export default function Index(){
    const { cart } = useContext(CartContext)
    console.log(cart)
    return(
        <>
        <Carrousel/>
        <p>INICIO</p>
        </>
    )
}