import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../src/App';
import About from '../src/routes/about';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route
                path="*"
                element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </main>
                }
            />
        </Routes>
    </BrowserRouter>
);