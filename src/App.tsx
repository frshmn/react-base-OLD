import React from 'react';
import { Link } from 'react-router-dom';
import './sass/App.scss';
import neko from './images/neko1.jpeg';

export default function App() {
    return (
        <div>
            <img src={neko} />
            <Link to="/about">about!</Link>
        </div>
    )
}