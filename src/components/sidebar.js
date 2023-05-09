import React from 'react';

const Sidebar = () => {
    return (
        <div id='sidebar-div' className='col-2 d-flex flex-column align-items-center justify-content-center'>
            <div className='card'>
                <img src='./headshot.jpg' class='card-img-top' alt='sidebar logo' />
                <div className='card-body'>
                    <p className='card-text'>Hello! My name is Ozan Erdal. I'm a 24 year old recent grad looking for work.</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;