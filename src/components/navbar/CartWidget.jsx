import { Link } from "react-router-dom";

export default function CartWidget(props){
    return(
        <Link to="/cart">
          <div className="user_info">
            <i className="fas fa-shopping-cart"><div className=""><p className="prod_counter">0</p></div></i>
            <i className="fas fa-user"></i>
        </div>
        </Link>
      
    )
}