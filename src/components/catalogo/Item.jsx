import React  from "react";
import ItemCount from './ItemCount'

function Item(props) {

    const count = props.count

         return(
            <>
            {props.data.map(({...props}) => (
                <div className="in-sm-12 in-md-4 in-lg-4">
                    <div className="container">
                        <div className="images">
                            <img src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg" />
                        </div>
                        <div className="product">
                            <p>Women's Running Shoe</p>
                            <h1>{props.title}</h1>
                            <h2>{props.price}</h2>
                            <p className="desc">{props.description}</p>
                            {/*Componente de BOTONES, con funcionalidad*/}
                            <ItemCount stock = "5" initial = "1"  onAdd = {(counter, stock, cartCounter) => {
                                if(counter <= stock ){
                                    cartCounter.innerHTML = counter
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

export default Item;