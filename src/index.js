import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Elm from './Elm';
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Elm />, document.getElementById('root'));
registerServiceWorker();
