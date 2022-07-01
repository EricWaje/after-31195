import React from 'react';
import { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext);
    return (
        <div className="shop">
            <AiOutlineShoppingCart color="white" size={25} />
            <p>{totalUnidades()}</p>
        </div>
    );
};

export default CartWidget;
