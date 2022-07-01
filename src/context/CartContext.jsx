import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isOnCart(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isOnCart = (id) => cart.some((prod) => prod.id === id);

    const sumarCantidad = (item, cantidad) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };

    const totalPrice = () => {
        return 10;
    };

    const totalUnidades = () => {
        return 5;
    };

    const deleteItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    const deleteAll = (_) => setCart([]);

    return (
        <CartContext.Provider
            value={{
                addToCart,
                cart,
                deleteItem,
                totalPrice,
                deleteAll,
                totalUnidades,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
