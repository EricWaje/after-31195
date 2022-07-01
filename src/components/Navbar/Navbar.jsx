import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">After</Link>
            <ul>
                <Link to="/category/remeras">Remeras</Link>
                <Link to="/category/camisas">Camisas</Link>
                <Link to="/category/gorras">Gorras</Link>
                <Link to="/category/rinoneras">Riñoneras</Link>
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;
