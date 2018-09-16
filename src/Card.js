import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div class="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src="https://robohash.org/random?200x200"/>
            <div>
                <h2>Name</h2>
                <p>E-mail address</p>
            </div>
        </div>
    );
}


export default Card;