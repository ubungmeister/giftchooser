import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
const Global = createGlobalStyle`
  body {
    background-color: #091612;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    font-family: "Sofia", sans-serif;
  }

`
  

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <>
        <App />
        <Global />
    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
