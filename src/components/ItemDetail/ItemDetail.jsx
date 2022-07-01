import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
    const [cant, setCant] = useState(0);

    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCant(cantidad);
        addToCart(product, cantidad);
    };
    return (
        <div className="detail">
            <img src={product.img} alt={product.name} width="400" />
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h3>$ {product.price}</h3>
                {cant === 0 ? (
                    <ItemCount
                        stock={product.stock}
                        initial={1}
                        onAdd={onAdd}
                    />
                ) : (
                    <Link to="/cart">Ver carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
