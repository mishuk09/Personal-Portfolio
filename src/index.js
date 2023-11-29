import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import WhatsApp from './components/OthersComponent/Button/WhatsApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
render(<WhatsApp></WhatsApp>, document.getElementById('root'));

root.render(

  <React.StrictMode>
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </React.StrictMode >


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
