import "./global.css"
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import NavBar from '@/components/navbar/NavBar';

const App = () => {
  return <NavBar/>;
};


const container: HTMLElement = document.getElementById('_abp-web-control-pabel') as HTMLElement;

if (container) {
  const _root = createRoot(container);
  _root.render(<App />);
} else {
  console.error('Container element not found');
}