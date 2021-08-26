import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function ItemCount(props){
    const [count, setCount] = useState(parseInt(props.initial))
    const [cartCount, setCartCount] = useState(0)
    
    const cartNumber = (document.querySelector('.prod_counter'))

    let cartNumberParseInt = parseInt(cartNumber.innerText)
    console.log(cartNumberParseInt, cartNumber)

    

    useEffect(() => {
        //onClick a la suma o resta
      console.log('added to count', count)
    }, [count])

    useEffect(() => {
            //onClick al boton de add to cart
        console.log('added to cart',cartCount)
    }, [cartCount])

   
    
    return(
            <div className="buttdiv buttons">
                
                <input className="counter-input" value={count} type="text"/>

                <button className="count-button" onClick={ () => (
                    setCount(count + 1)
                )}> <p>+</p> </button>


                <button className="add" onClick={() => (props.onAdd(count, props.stock, cartNumber, cartNumberParseInt, setCartCount(cartCount + count)))}><p>Add to cart</p></button>
                

                <button className="count-button" onClick = {() => (
                    setCount(count - 1)
                )}><p>-</p></button>

                <Link to="/cart">
                {(cartCount > 0 && count<=props.stock ) ? <button style={{margin:"10px"}}> Terminar compra </button> : ''}
                </Link>             
            </div>
    )
}

export default ItemCount;