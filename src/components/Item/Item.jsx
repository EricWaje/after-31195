import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div style={{ margin: '10px 20px', border: '2px solid black' }}>
            <Link to={`/item/${item.id}`}>
                <img width="200px" src={item.img} alt="producto" />
            </Link>
            <p>${item.price}</p>
        </div>
    );
};

export default Item;
