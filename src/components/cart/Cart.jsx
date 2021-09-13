import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import { useContext } from 'react'
import CartEmpty from '../../imagenes/emptycart.png'
import CartDetail from './CartDetail'
import CartFormLog from './CartFormLog'

export default function Cart() {
        //Contexto CartContext
    const { cart, clear, removeItem} = useContext(CartContext)
    
    const cartPrice = cart.reduce((final, item) => {return (final + (item.price * item.quantityToBuy ))}, 0)
    
    return(
        <>
        <div className="row">
            <div style={{textAlign: "center"}} className="in-sm-12 in-md-8 in-lg-8 cart-center-div">
                {cart.length<=0 ? <h1>Tu carrito esta vacio, <Link to="/products"> hace tu compra! </Link></h1> : ''}

                <h2> Subtotal: ${cartPrice} </h2> 

                {cart.length>=1 ? <button className="but_clearCart" onClick={() => {clear()}}> Limpiar el carrito </button> : ''}

                {cart.length<=0 ? <img src={CartEmpty}/> : ''}

                {cart.map((item) => (
                    <>
                    <CartDetail remove={removeItem} {...item}/>
                    </>
                ))}
            </div>
            <div className="in-sm-12 in-md-4 in-lg-4">
               <CartFormLog finalPrice={cartPrice}/>
            </div>
        </div>
        </>
    )
}