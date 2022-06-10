import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { traerProductos } from '../../mock/products';

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        traerProductos()
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
