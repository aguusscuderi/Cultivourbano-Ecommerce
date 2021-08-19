import React from "react";
import ItemCount from './ItemCount'

export default function ItemDetail({ item }) {
    console.log('item', item)

    return(
        <>
            {item.map((item) => (
                <div className="detail-product-container">
                    <div className="row">
                        <div className="product-image-detail_container in-sm-12 in-md-7 in-lg-7">
                            <img className="product-detail_img" src={item.pictureUrl} alt="" />
                        </div>
                        <div className="product-info-detail_container in-sm-12 in-md-4 in-lg-4">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <p>{item.price}</p>

                             {/*Componente de BOTONES, con funcionalidad*/}
                             <ItemCount stock = "5" initial = "1"  onAdd = {(counter, stock, cartCounter, parsedCartCounter) => {
                                if(counter <= stock ){
                                   cartCounter.innerHTML = counter + parsedCartCounter
                                }else{
                                    console.log('no hay stock')
                                }
                            }}/>

                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}