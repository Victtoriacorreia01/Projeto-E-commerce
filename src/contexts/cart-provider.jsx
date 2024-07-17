'use client'

import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    function addProductIntoCart(product) {
        const productExistentInCart = cart.find(
            (item) => item.name === product.name && item.id === product.id
        );

        if (productExistentInCart) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    const quantity = item.quantity + 1;

                    return { ...item, quantity };
                }

                return item;
            });

            setCart(newCart);

            return;
        }

        const newProduct = { ...product, quantity: 1 };
        const newCart = [...cart, newProduct];

        setCart(newCart);
    }

    function removeProductFromCart(product) {
        const newCart = cart.filter(
            (item) => !(item.id === product.id && item.name === product.name)
        );

        setCart(newCart);
    }

    function updateProductQuantity(product, newQuantity) {
        if (product <= 0) return

        const productExistentInCart = cart.find(
            (item) => item.id === product.id && item.name === product.name
        );

        if (!productExistentInCart) return

        const newCart = cart.map((item) => {
            if (
                item.id === productExistentInCart.id &&
                item.name === productExistentInCart.name
            ) {
                return {
                    ...item,
                    quantity: newQuantity,
                };
            }

            return item;
        });

        setCart(newCart);
    }

    function productCartIncrement(product) {
        updateProductQuantity(product, product.quantity + 1)
    }

    function productCartDecrement(product) {
        updateProductQuantity(product, product.quantity - 1)
    }

    return (
        <CartContext.Provider value={{ cart, addProductIntoCart, removeProductFromCart, productCartIncrement, productCartDecrement }}>
            {children}
        </CartContext.Provider>
    )
}

