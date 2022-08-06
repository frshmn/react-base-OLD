import React from 'react';
import { Header, Footer } from  './parts';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './sass/App.scss';
import App from '../src/App';
import { About, Projects, Contact, Research } from './routes';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    // add basename="/projects/some" before build
    <BrowserRouter basename='/'>
        <div id='some' className='some'>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/research" element={<Research />} />
                <Route
                path="*"
                element={
                <main style={{ padding: "1rem" }}>
                <p>Oops!</p>
                </main>
                }
                />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
);