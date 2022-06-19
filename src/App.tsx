import React from 'react';
import './sass/App.scss';
import neko from './images/neko1.jpeg';

export default function App() {
    return (
        <div>
            <img src={neko} />
            Hello World!
        </div>
    )
}