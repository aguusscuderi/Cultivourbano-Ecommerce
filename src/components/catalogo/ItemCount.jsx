import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import {useContext} from 'react'

function ItemCount(props){
        //Estado del contador
    const [count, setCount] = useState(parseInt(props.initial))

        //Contexto CartContext
    const { cart, addItem, cartCount } = useContext(CartContext)
    
    useEffect(() => {
        //onClick a la suma o resta
            //console.log('added to count', count)
    }, [count])

    console.log('agregado!', cart)

    return(
            <>
            <div className="buttdiv buttons">
                
                <input className="counter-input" value={count} type="text"/>

                <button className="count-button" onClick={() => (setCount(count + 1))}> <p>+</p> </button>


                <button className="add" onClick={() =>(addItem(props.theProduct, count, props.theProduct.id))}>
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