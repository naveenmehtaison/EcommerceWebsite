import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import DataContext from './Store/auth-context';
import { useContext } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter> <App /> </BrowserRouter>);
