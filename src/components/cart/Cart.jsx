import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import {useContext, useState} from 'react'
import CartDetail from './CartDetail'

export default function Cart() {
        //Contexto CartContext
    const { cart, clear, removeItem} = useContext(CartContext)
    console.log(cart, 'llegue al carrito!!!')
    
    return(
        <>
        {cart.length<=0 ? <h1>Tu carrito esta vacio, <Link to="/products"> hace tu compra! </Link></h1> : ''}
        <h2> Subtotal: ${cart.reduce((final, item) => {return (final + (item.price * item.quantityToBuy ))}, 0)} </h2> 
        <button onClick={() => {clear()}}> Limpiar el carrito </button>
        {cart.map((item) => (
            <>
            <CartDetail remove={removeItem} {...item}/>
            </>
        ))}
        </>
    )
}