import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext([])

export default function CartContextLogic({defaultValue = [], children}) {
    const [cart, setCart] = useState(defaultValue)

    const isInCart = (id) => {
      return cart.some(el => el.id === id)
    }

    const addItem = (item, count, id) => {
      if(isInCart(id)){
        const product = cart.filter(el => (el.id === id))
        product[0].quantityToBuy += count
       }else{
         setCart([...cart, {
           id: item.id,
           title: item.title,
           description: item.description,
           price: item.price,
           pictureUrl: item.pictureUrl,
           categoria: item.categoria,
           quantityToBuy: count
          }])
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

