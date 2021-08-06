import React  from "react";

function Item(props) {
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
                        <div className="buttons">
                        <button className="add">Add to Cart</button>
                        </div>
                    </div>    
                </div>
               
                </div>
                ))} 
            
            
            </>
    )
}

export default Item;