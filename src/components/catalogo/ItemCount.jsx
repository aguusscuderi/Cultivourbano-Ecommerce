import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import {useContext} from 'react'
import CartWidget from '../navbar/CartWidget'

function ItemCount(props){
    
        //Estados de los contadores del producto y carrito
    const [count, setCount] = useState(parseInt(props.initial))
    const [cartCount, setCartCount] = useState(0)

    
        //Manejo del CartWidget
    const cartNumber = (document.querySelector('.prod_counter'))
    let cartNumberParseInt = parseInt(cartNumber.innerText)


        //Contexto CartContext
    const { cart, addItem, removeItem} = useContext(CartContext)
    //console.log(typeof cart, 'llego el contexto al count')


    useEffect(() => {
        //onClick a la suma o resta
      console.log('added to count', count)
    }, [count])


    useEffect(() => {
        //onClick al boton de add to cart
        console.log('added to cart', cartCount)
    }, [cartCount])

    
        console.log('agregado!', cart)
    



   
    
    return(
            <>
            <div className="buttdiv buttons">
                
                <input className="counter-input" value={count} type="text"/>

                <button className="count-button" onClick={() => (setCount(count + 1))}> <p>+</p> </button>


                <button className="add" onClick={() =>
                     (props.onAdd(count, props.stock, cartNumber, cartNumberParseInt, setCartCount(cartCount + count), addItem(props.theProduct, count, props.theProduct.id)))
                    }>
                    <p>Add to cart</p>
                </button>
                

                <button className="count-button" onClick = {() => (setCount(count - 1))}><p>-</p></button>

                <Link to="/products">
                    <button> Continua tu compra! </button>
                </Link>

                <Link to="/cart">    
                     {(cartCount > 0 && count<=props.stock ) ? <button style={{margin:"10px"}}> Terminar compra </button> : ''}  
                </Link>
            </div>
            </>
    )
}

export default ItemCount;