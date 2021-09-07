import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/cartContext";

export default function CartWidget(props){
    const {cartCount} = useContext(CartContext)
    return(
        <Link to="/cart">
          <div className="user_info">
            <i className="fas fa-shopping-cart"><div className=""><p className="prod_counter">{cartCount}</p></div></i>
            <i className="fas fa-user"></i>
        </div>
        </Link>
      
    )
}