import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { CardList } from './components/cardcomponents/CardList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList/>
  </React.StrictMode>
);

