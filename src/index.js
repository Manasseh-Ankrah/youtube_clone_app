import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './Context';
// import YoutubeApi from './YoutubeApi';
// import ContextComponent from './NewProject/ContextComponent';



ReactDOM.render(
  <React.StrictMode>
    <Context> 
    <App />
    </Context> 
  </React.StrictMode>,
  document.getElementById('root')
);

