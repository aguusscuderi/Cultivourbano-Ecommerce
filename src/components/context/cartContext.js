import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const CartContext = createContext([])

export default function CartContextLogic({defaultValue = [], children}) {

    const [cart, setCart] = useState(defaultValue)
    const [cartCount, setCartCount] = useState(0)

  //Logica del carrito:

    const isInCart = (id) => {
      return cart.some(el => el.id === id)
    }

      const addItem = (item, count, id) => {
        if(item.id !== undefined) {
          if(isInCart(id)) {

          const product = cart.filter(el => (el.id === id))
          product[0].quantityToBuy += count
          setCartCount(count + cartCount)
          toLocalStorage()

          } else{

          setCart([...cart, {

            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
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


    //Manejando el LOCAL STORAGE
      const backFromLocalStorage = () => {
        let productsJSON = JSON.parse(localStorage.getItem('cart_products'));
        let countJSON =JSON.parse(localStorage.getItem('cart_products_count'));
        if(productsJSON && countJSON) {
          setCart([...productsJSON])
          setCartCount(countJSON)
        }
      }

      useEffect(() => {
        backFromLocalStorage()
      }, [])

      const toLocalStorage = () => {
            const productsInCart = JSON.stringify(cart)
            const productsInCartCount =  JSON.stringify(cartCount)
            localStorage.setItem('cart_products', productsInCart)
            localStorage.setItem('cart_products_count', productsInCartCount)
        }

        useEffect(() => {
            setTimeout(() => {toLocalStorage()}, 100)
        }, [cart])



    return <CartContext.Provider value={{cart, setCart, addItem, clear, removeItem, cartCount, backFromLocalStorage, toLocalStorage}}>
        {children}
    </CartContext.Provider>
}

