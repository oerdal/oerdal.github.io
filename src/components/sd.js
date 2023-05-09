import React from 'react';

const SD = () => {
    return (
        <div id='sd-div' className='col d-flex flex-column align-items-center'>
            <div id='sd-body' className='d-flex flex-column align-items-center justify-content-center flex-grow-1'>
                <div>
                    <img src='./monalisa.jpg' alt='the mona lisa' className='p-0 mx-2'/>
                    <img src='./annelisa.png' alt='anne hathaway as mona lisa' className='p-0 mx-2'/>
                </div>
                <p className='font-weight-light text-muted'>Anne Hathaway as the Mona Lisa</p>
            </div>
        </div>
    );
};

export default SD;