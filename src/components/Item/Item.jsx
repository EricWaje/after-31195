import React from 'react';

const Item = ({ item }) => {
    return (
        <div style={{ margin: '10px 20px', border: '2px solid black' }}>
            <img width="200px" src={item.img} alt="producto" />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
        </div>
    );
};

export default Item;
