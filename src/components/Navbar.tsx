import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const Navbar: React.FC = () => {
    return (
        <div>
            <Link to='/'>
                <img
                    src={logo}
                    alt="store"
                    className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5 d-flex">
                    <Link to="/products" className="nav-link">
                        products
                        </Link>
                    <Link to="/about" className="nav-link">
                        about
                        </Link>
                </li>
            </ul>
            <Link to='/cart' className="ml-auto">
                <PrimaryButton>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>
                       my cart
                    </PrimaryButton>
            </Link>
        </div>
    );
}

export default Navbar;