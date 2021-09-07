import React from "react";
import {useContext} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/cartContext'

export default function ItemDetail(props) {
    //Almaceno el PRODUCTO que llega en una variable y se lo paso al Count
    const theProduct = {...props}
    
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
                        <p>${props.price}</p>

                    <ItemCount theProduct={theProduct} stock = "5" initial = "1" /*onAdd={onAdd}*//>

                    </div>
                </div>
        </div>
        </>
    )
}