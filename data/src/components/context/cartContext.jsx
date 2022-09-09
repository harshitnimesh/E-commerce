import { createContext, useState, useEffect } from "react";
const addcart = (CartItems, ProducttoAdd) => {
  const existingCartItem = CartItems.find(
    (cartItem) => cartItem.id === ProducttoAdd.id
  );

  if(existingCartItem){
    return CartItems.map((cartItem)=> cartItem.id === ProducttoAdd.id
    ? {...cartItem, quantity: cartItem.quantity + 1}: cartItem);
  }

  return [...CartItems, {...ProducttoAdd, quantity: 1}];

};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  CartItems: [],
  addItemToCart: ()=>{},
  cartCount: 0
});
  

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(()=>{
    const newCartCount = CartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  },[CartItems]);


  const addItemToCart = (ProducttoAdd) =>{
    setCartItems(addcart(CartItems, ProducttoAdd));
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, CartItems, cartCount};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
