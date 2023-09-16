import { createContext, useState } from "react";
import { useEffect } from "react";

const getInitialState = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cardItem) => cardItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, productToRemove) => {
  if (productToRemove.quantity <= 1) {
    return cartItems.filter((cardItem) => cardItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter((cardItem) => cardItem.id !== productToDelete.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const removeItemFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  };
  const deleteItemFromCart = (product) => {
    setCartItems(deleteCartItem(cartItems, product));
  };

  const value = {
    removeItemFromCart,
    deleteItemFromCart,
    cartItems,
    addItemToCart,
    isCartOpen,
    setIsCartOpen,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
