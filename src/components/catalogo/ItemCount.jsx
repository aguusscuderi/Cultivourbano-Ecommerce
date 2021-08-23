import React, { useState, useEffect } from "react";

function ItemCount(props){
    const [count, setCount] = useState(parseInt(props.initial))
    
    const cartNumber = (document.querySelector('.prod_counter'))
    const cartNumberParseInt = parseInt(cartNumber.innerText)

    useEffect(() => {
        const divButt = document.querySelectorAll('.buttons')
        divButt.forEach(el => {
            if(el.parentElement.className !== "product"){
                el.remove()
            }
        })

    }, [count])
    
    return(
            <div className="buttdiv buttons">
                
                <input className="counter-input" value={count} type="text"/>

                <button className="count-button" onClick={ () => (
                    setCount(count + 1)
                )}> <p>+</p> </button>

                <button className="add" onClick={() => (props.onAdd(count, props.stock, cartNumber, cartNumberParseInt))}><p>Add to cart</p></button>

                <button className="count-button" onClick = {() => (
                    setCount(count - 1)
                )}><p>-</p></button>

            </div>
    )
}

export default ItemCount;