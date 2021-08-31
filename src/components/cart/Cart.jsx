import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import {useContext} from 'react'

export default function Cart(props) {
    //para que le llegue el context tiene que estar en ItemCount o alguno de los hijos de ItemDetailContainer que es el provider


    //Contexto CartContext
    const { cart } = useContext(CartContext)
    //const itemToCart = useContext(CartContext)
    console.log(cart, 'llegue al carrito!!!')


 
    //console.log(//props.productsToCart, 'llegue al carrito!!!, pero como prop')
    //console.log(typeof cart, 'llego el contexto al count')
    

    return(
        <>
       <h1>Soy el carrito</h1>
      
        </>
    )
}