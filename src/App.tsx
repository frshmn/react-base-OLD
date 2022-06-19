import React from 'react';
import './sass/App.scss';
import neko from './images/neko1.jpeg';

export const App: React.FC = () => {
    return (
        <div>
            <img src={neko} />
            Hello World!
        </div>
    )
}