import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import {useContext} from 'react'

function ItemCount(props){
        //Estado del contador
    const [count, setCount] = useState(parseInt(props.initial))
    const [enabled, setEnabled] = useState(true)

        //Contexto CartContext
    const {addItem, cartCount } = useContext(CartContext)
    
    useEffect(() => {
        //onClick a la suma o resta
    }, [count])

    useEffect(() => {
        if(props.theProduct){
            setEnabled(false)
        }
    }, [enabled])

    return(
            <>
            <div className="buttdiv buttons">
                
                <input className="counter-input" value={count} type="text"/>

                <div style={{height: "50%"}, {padding:"5px"}}>
                    <button className="count-button" onClick={() => (setCount(count + 1))}><p> + </p></button>

                    <button disabled={enabled} className="add" onClick={() => addItem(props.theProduct, count, props.theProduct.id)}>
                        <p>Add to cart</p>
                     </button>
                
                     <button className="count-button" onClick = {() => (setCount(count - 1))}><p> - </p></button>
                </div>
             
                <Link to="/products">
                    <button> Continua tu compra! </button>
                </Link>

                <Link to="/cart">    
                     {(cartCount > 0) ? <button style={{margin:"10px"}}> Terminar compra </button> : ''}  
                </Link>
            </div>
            </>
    )
}

export default ItemCount;