import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // ← This is required for Tailwind to work
import App from './App';

// Create root and render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);