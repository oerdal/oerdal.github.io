import React from 'react';

const Projects = () => {
    return (
        <div id='projects-div' className='col d-flex flex-column align-items-center'>
            <div id='projects-body' className='d-flex flex-column align-items-center justify-content-center flex-grow-1'>
                <div id='544-paper-card' className='card my-1 w-75'>
                    <div className='card-body'>
                        <h5 className='card-title'>Multimodal SER</h5>
                        <h6 className='cart-subtitle'><a href='./csci_544_paper.pdf' target='_blank'>Report</a></h6>
                        <p className='card-text'>Group paper exploring multimodal speech emotion recognition (SER) using transformers.</p>
                    </div>
                </div>
                <div id='567-paper-card' className='card my-1 w-75'>
                    <div className='card-body'>
                        <h5 className='card-title'>Earthquake Damage Classification</h5>
                        <h6 className='cart-subtitle'><a href='./csci_567_paper.pdf' target='_blank'>Report</a></h6>
                        <p className='card-text'>Group competition on <a href='https://www.drivendata.org/competitions/57/nepal-earthquake/' target='_blank' rel='noreferrer'>Driven Data</a> on classifying building damage intensity in the 2015 Nepal quake.</p>
                    </div>
                </div>
                <div id='water-reuse-paper-card' className='card my-1 w-75'>
                    <div className='card-body'>
                        <h5 className='card-title'>AI/ML in Potable Reuse Projects</h5>
                        <h6 className='cart-subtitle'><a href='./amta_2022_paper.pdf' target='_blank'>Report</a></h6>
                        <p className='card-text'>Independent research paper for <a href='https://www.amtaorg.com/demonstration-of-artificial-intelligence-and-machine-learning-in-potable-reuse-projects' target='_blank' rel='noreferrer'>AMTA 2022</a> with a subsequent webcast for <a href='https://watereuse.org/event/digital-platform-artificial-intelligence-and-machine-learning-in-potable-reuse-projects-webcast/' target='_blank' rel='noreferrer'>WateReuse.</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;