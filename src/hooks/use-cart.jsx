'use client';


import { useContext } from 'react';
import { CartContext } from '../contexts/cart-provider';

const useCart = () => {
  const {
    cart,
    addProductIntoCart,
    removeProductFromCart,
    productCartIncrement,
    productCartDecrement,
    fetchCart,
  } = useContext(CartContext);

  return {
    cart,
    addProductIntoCart,
    removeProductFromCart,
    productCartIncrement,
    productCartDecrement,
    fetchCart,
  };
};

export default useCart;
