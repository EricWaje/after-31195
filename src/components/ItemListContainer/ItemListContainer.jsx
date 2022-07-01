import { getDocs, query, where } from 'firebase/firestore';
import { collectionProd } from '../../firebaseConfig';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        //const collectionProd = collection(db, 'products')
        //const ref = collectionProd;

        const ref = categoryId
            ? query(collectionProd, where('category', '==', categoryId))
            : collectionProd;

        getDocs(ref).then((response) => {
            const products = response.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            setProducts(products);
        });
    }, [categoryId]);

    //console.log(products);
    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList items={products} />
        </div>
    );
};

export default ItemListContainer;

/* const traerCharacters = async() =>{
    try{
        const data = await fetch('url')
    const response = await data.json()
    console.log(response.results)
    }
    catch(e){
        console.log(e)
    }
    
} */

/* const personajes = fetch('https://rickandmortyapi.com/api/character');
console.log(personajes);
personajes.then((res) => {
    console.log(res);
    console.log(res.json());
    res.json().then((res) => {
        setProducts(res.results);
    });
}); */
