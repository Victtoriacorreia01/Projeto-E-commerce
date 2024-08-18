import React, { createContext, useState, useContext } from 'react';

// Criar o contexto
export const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Adicionar produto ao carrinho
  const addProductIntoCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex > -1) {
        // Atualizar quantidade se o produto já estiver no carrinho
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantidade += product.quantidade;
        return updatedCart;
      } else {
        // Adicionar novo produto ao carrinho
        return [...prevCart, { ...product, quantidade: product.quantidade || 1 }];
      }
    });
  };

  // Remover produto do carrinho
  const removeProductFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Incrementar quantidade do produto
  const productCartIncrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantidade: (item.quantidade || 0) + 1 } : item
      )
    );
  };

  // Decrementar quantidade do produto
  const productCartDecrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: (item.quantidade || 0) - 1 }
          : item
      )
    );
  };

  // Buscar carrinho (se necessário, pode ser implementado conforme a necessidade)
  const fetchCart = () => {
    // Implementar a lógica para buscar o carrinho, se necessário
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductIntoCart,
        removeProductFromCart,
        productCartIncrement,
        productCartDecrement,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o contexto
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
