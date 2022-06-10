import React, { useState, useEffect } from 'react';
import { traerProducto } from '../../mock/products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        traerProducto()
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //console.log(product);
    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
