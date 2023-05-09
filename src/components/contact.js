import React from 'react';

const Contact = () => {
    return (
        <div id='contact-div' className='col d-flex flex-column align-items-center'>
            <div id='contact-body' className='d-flex flex-column align-items-center justify-content-center flex-grow-1 text-center w-75'>
                <p>Feel free to contact me on any of the following!</p>
                <div className='contact-links container d-flex justify-content-around'>
                    <a href='https://www.linkedin.com/in/oerdal/' target='_blank'>LinkedIn</a>
                    <a href='https://github.com/oerdal' target='_blank'>GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;