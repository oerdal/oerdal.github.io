import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id='navbar-div' className='container'>
            <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbar-contents' aria-controls='navbar-contents' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbar-contents'>
                        <div className='navbar-nav container-fluid'>
                            <ul className='navbar-nav nav nav-underline container justify-content-around'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/'>Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/projects'>Projects</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;