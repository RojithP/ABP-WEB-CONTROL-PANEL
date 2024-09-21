import "./global.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <h1 className="text-yellow-400">Hello, React with Webpack and TypeScript!</h1>;
};


const container: HTMLElement = document.getElementById('_abp-web-control-pabel') as HTMLElement;

if (container) {
  const _root = createRoot(container);
  _root.render(<App />);
} else {
  console.error('Container element not found');
}