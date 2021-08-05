import React  from "react";

function Item(props) {
    return(
        <ul>
            {props.data.map(({...props}) => (
            <>
            <li key={props.id}> {props.description} </li>
            </>
            ))}
        </ul>    
    )
}

export default Item;