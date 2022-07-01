import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collectionProd } from '../../firebaseConfig';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const ref = doc(collectionProd, id);
        getDoc(ref).then((response) => {
            setProduct({
                id: response.id,
                ...response.data(),
            });
        });
    }, [id]);

    //console.log(product);
    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
