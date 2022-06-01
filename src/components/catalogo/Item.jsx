import React  from "react";
import { Link } from 'react-router-dom';

function Item(props) {

         return(
            <>
            {props.data.map(({...props}) => (
                <div key={props.id} className="in-sm-12 in-md-4 in-lg-4">
                    <div className="container">
                    <Link to={`/products/product/${props.idFire}`}>
                        <div className="images">
                            <img alt={props.description} className="every-product_img" src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg" />
                        </div>
                    </Link>
                        <div className="product">
                            <h1>{props.title}</h1>
                            <h2>{props.price}</h2>
                            <p className="desc">{props.description}</p>         
                        </div>    
                    </div>
                </div>
               
            ))}     
            </>
        )
}

export default Item;