import { createContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext([])

export default function CartContextLogic({defaultValue = [], children}) {
    const [cart, setCart] = useState(defaultValue)
    const [cartCount, setCartCount] = useState(0)

    const isInCart = (id) => {
      return cart.some(el => el.id === id)
    }

    const addItem = (item, count, id) => {
      if(item.id !== undefined) {
        if(isInCart(id)) {
        const product = cart.filter(el => (el.id === id))
        product[0].quantityToBuy += count
        setCartCount(count + cartCount)
        }else {
         setCart([...cart, {
           id: item.id,
           title: item.title,
           description: item.description,
           price: item.price,
           pictureUrl: item.pictureUrl,
           categoria: item.categoria,
           quantityToBuy: count
          }])

          setCartCount(count + cartCount)
       }
      }
     }

    const removeItem = (item) => {
      //Remuevo los productos que quiero eliminar
      const cartWithoutDeletedElement = cart.filter(el => el.id !== item.id)
      setCart(cartWithoutDeletedElement)

      //Los remuevo del CartWidget
      const cartCountWithoutElement = cart.find(el => el.id === item.id)
      setCartCount(cartCount - cartCountWithoutElement.quantityToBuy)
    }
  
    const clear = () => {
      //Vacio el CartWidget y tambien el array Cart
      setCart([])
      setCartCount(0)
    }

    return <CartContext.Provider value={{cart, setCart, addItem, clear, removeItem, cartCount}}>
        {children}
    </CartContext.Provider>
}

