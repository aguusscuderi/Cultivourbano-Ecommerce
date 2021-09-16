import React from "react";
import ItemCount from './ItemCount'
import MediosDePago from "./MediosDePago";


export default function ItemDetail(props) {
        //Almaceno el PRODUCTO que llega en una variable y se lo paso al Count
    const theProduct = {...props}
    
    return(
        <>
        <div className="detail-product-container">
                <div className="row">
                    <div className="product-image-detail_container in-sm-12 in-md-7 in-lg-7">
                        <img className="product-detail_img" src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg" alt="" />
                    </div>
                    <div className="product-info-detail_container in-sm-12 in-md-4 in-lg-4">
                        <h1 style={{'fontSize': '30px'}}>{props.title}</h1>
                        <p>{props.description}</p>
                        <p style={{'fontSize': '20px'}}>${props.price}</p>

                        <ItemCount theProduct={theProduct}  initial = "1"/>
                        <MediosDePago/>
                    </div>
                </div>
        </div>
        </>
    )
}