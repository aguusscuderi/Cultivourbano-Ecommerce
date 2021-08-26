import { useState } from 'react';
import ItemList from './ItemList';
import {CartContext} from '../context/cartContext'

function ItemListContainer() {
    const [cart, setCart] = useState([])
    return(
        <>
        <div className="row">
			<div className="in-sm-12 in-md-8 in-lg-8">
				<div className="row row-products">
                    <CartContext.Provider value={cart}>
                           <ItemList/>
                    </CartContext.Provider>
				</div>
			</div>
			<div className="in-sm-12 in-md-4 in-lg-4">
                <h3>FILTROS</h3>
			</div>
		</div>
        </>
    )
}

export default ItemListContainer