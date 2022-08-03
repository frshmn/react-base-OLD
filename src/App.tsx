import React from 'react';
import work from './images/work-1.png';

const devPath = "/projects/yodo";

export default function App() {
    return (
    <main className='front__content'>
        <section className='front__slider'>
            <div className='front__slider-item'>
                <img src={work} />
            </div>
            <div className='dots'>
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>
        </section>
    </main>
    )
}