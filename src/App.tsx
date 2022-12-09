import React, {useState, KeyboardEvent} from 'react';
import './App.css';
import styled from "styled-components";
import {keyframes} from 'styled-components'
import {Header} from "./components/Header";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import Footer from "./components/Footer";
import FormPage from "./pages/FormPage";

type ObjType = {
    santaName: string | null
    recipientName: string | null
}

function App() {


    return (
        <div className='flex flex-col h-screen'>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/form' element={<FormPage/>}/>
            </Routes>
            <Footer/>
        </div>

    );
}

export default App;
