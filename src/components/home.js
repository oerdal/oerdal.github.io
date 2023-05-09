import React from 'react';

const Home = () => {
    return (
        <div id='home-div' className='col d-flex flex-column align-items-center'>
            <div id='home-body' className='d-flex align-items-center justify-content-center flex-grow-1 text-center w-75'>
                <p>I'm currently living in California while I search for work.
                My hobbies and interests include hiking, board games, mixing music.
                I've also been exploring AI image generation recently in my free time as well.
                Please feel free to reach out to me if we happen to share any interests.</p>
            </div>
        </div>
    );
};

export default Home;