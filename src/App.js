import React from 'react';

import { Route, Routes } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";

import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';

const App = () => {
    return (
        <div className='container vh-100 d-flex flex-column'>
            <Navbar />
            <div className='row flex-grow-1'>
                <Sidebar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;