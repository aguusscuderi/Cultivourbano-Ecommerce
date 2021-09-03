import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import {useContext} from 'react'
import CartDetail from './CartDetail'

export default function Cart() {
        //Contexto CartContext
    const { cart } = useContext(CartContext)
    console.log(cart, 'llegue al carrito!!!')
    //console.log(cart[0].quantityToBuy)

    return(
        <>
       <h1>Soy el carrito</h1>
        {cart.map((item) => (
            <CartDetail {...item}/>
        ))}
        </>
    )
}