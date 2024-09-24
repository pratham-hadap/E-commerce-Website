import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from './redux/Store';
import { Toaster } from 'react-hot-toast';
import AppContextProvider from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AppContextProvider>
        <BrowserRouter>
           <Provider store={store} >
                <App/>
                <Toaster></Toaster>
           </Provider>
        </BrowserRouter>
    </AppContextProvider>
    
);

