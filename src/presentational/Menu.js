import React from 'react';

const Menu = () => {
    return (
        <div className="ui segment">
            <div className="ui borderless top fixed menu">
                <div className="ui container">
                    <div className="item">
                        <img src="/img/logo.png" alt="Cainthus Challenge Logo" />
                    </div>
                    <a className="item" href="https://www.linkedin.com/in/karen-santana-814809149/" target="_blank" aria-label="Hire me" rel="noopener noreferrer">Hire me</a>
                    <a className="item"href="https://www.cainthus.com/about-us/" target="_blank" aria-label="About the company" rel="noopener noreferrer">About the company</a>
                    <div className="right menu">
                        <a className="item" href="https://github.com/karensantana/cainthus" target="_blank" aria-label="Repository" rel="noopener noreferrer">
                            <i className="github icon"></i>
                        </a>
                    </div>
                </div>    
            </div>
        </div>    
    );

}

export default Menu;