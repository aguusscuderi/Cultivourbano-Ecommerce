import React, { useState, useEffect } from "react";

function ItemCount(props){
    const [count, setCount] = useState(parseInt(props.initial))

    const cartNumber = document.querySelector('.prod_counter')

    useEffect(() => {
        console.log('changed')
    }, [count])

    return(
        <div className="itemBuy_container">
            <b>PRODUCTO</b>
            <div className="buyButtons_container">
                <div className="counter">{count}</div>

                <button className="plus" onClick={ () => (
                    setCount(count + 1)
                )}> + </button>

                <button className="addCart" onClick={() => (props.onAdd(count, props.stock, cartNumber))}>Add to cart</button>

                <button className="rest" onClick = {() => (
                    setCount(count - 1)
                )}> - </button>

            </div>
        </div> 
    )
}

export default ItemCount;