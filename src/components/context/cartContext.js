import { createContext, useEffect } from "react";
import { useState } from "react";
import Cart from "../cart/Cart";

export const CartContext = createContext([])

export default function CartContextLogic({defaultValue = [], children}) {
    const [cart, setCart] = useState(defaultValue)

    const isInCart = (id) => {
      return cart.some(el => el.id === id)
    }

    
    const addItem = (item, quantity, count, id) => {
      if(isInCart(id)){
        console.log('el item ya existe')
        Object.defineProperty(item, 'quantityToBuy', {value: quantity+count, writable: true})
      }else{
        setCart([...cart, item])
        Object.defineProperty(item, 'quantityToBuy', {value: quantity+count, writable: true})
      }
    }

 
    /*const removeItem = (item) => {
      setCart(() => {cart.pop(item.id)})
    }*/
  
    /*
    const clear = () => {
      setCart()
    }*/

    return <CartContext.Provider value={{cart, setCart, addItem}}>
        {children}
    </CartContext.Provider>
}

