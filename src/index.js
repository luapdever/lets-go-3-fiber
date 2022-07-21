import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { events } from '@react-three/fiber';

let root;

const handleResize = () => {
  const size = { width: window.innerWidth, height: window.innerHeight };

  // Create root with a size, events
  root = ReactDOM.createRoot(document.getElementById('root'), {
    events,
    size,
  });

  // Render JSX
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // const container = document.getElementById('canvas-container');
  // container.style = {
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  //   backgroundColor: 'red',
  // };

  // Or to unmount and dispose of memory:
  // root.unmount();
};
handleResize();

// window.addEventListener('resize', handleResize);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
