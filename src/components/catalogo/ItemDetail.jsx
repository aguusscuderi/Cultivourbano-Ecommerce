import React from "react";
import ItemCount from './ItemCount'

export default function ItemDetail(props) {

    
    //Add Cart
    const onAdd = (counter, stock, cartCounter, parsedCartCounter) => {
        if(counter <= stock){
            cartCounter.innerHTML = counter + parsedCartCounter
         }else{
             console.log('no hay stock')
         }
    }
    

    return(
        <>
        <div className="detail-product-container">
                <div className="row">
                    <div className="product-image-detail_container in-sm-12 in-md-7 in-lg-7">
                        <img className="product-detail_img" src={props.pictureUrl} alt="" />
                    </div>
                    <div className="product-info-detail_container in-sm-12 in-md-4 in-lg-4">
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        <p>{props.price}</p>

                    <ItemCount stock = "5" initial = "1" onAdd={onAdd}/>

                    </div>
                </div>
        </div>
        </>
    )
}