import React, { useState, useEffect } from "react";

function ItemCount(props){
    const [count, setCount] = useState(parseInt(props.initial))

    const cartNumber = document.querySelector('.prod_counter')

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
                )}> + </button>

                <button className="add" onClick={() => (props.onAdd(count, props.stock, cartNumber))}>Add to cart</button>

                <button className="count-button" onClick = {() => (
                    setCount(count - 1)
                )}> - </button>

            </div>
    )
}

export default ItemCount;