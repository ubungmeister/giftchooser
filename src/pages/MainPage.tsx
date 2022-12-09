import React from 'react';
import styled from "styled-components";
import present from '../images/present.png'
import {Link} from "react-router-dom";

export const MainPage = () => {
    return (
        <div className='grid md:grid-cols-2 gap-0 rounded-lg justify-center items-center ml-40 mb-20 mt-10'>
            <div className='flex-col justify-center my-10 ml-24'>
                <p className='text-black font-semibold text-4xl mb-8'>Secret Santa picker<br/> by email</p>
                <p className='text-gray-500 text-l font-semibold mb-8'>Guaranteed to be random <br/> Fully anonymous assignments<br/> No hat required!</p>
                <Link to={'/form'}>
                    <button className='bg-red-600 px-6 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Start</button>
                </Link>

            </div>
            <div>
                <img src={present} width={230}/>
            </div>
        </div>
    );
};



