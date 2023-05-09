import React from 'react';

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
                                    <a className='nav-link' href='/'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/projects'>Projects</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='/contact'>Contact</a>
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