import React from 'react';

import logo from '../images/santa-claus (1).png'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className='bg-picture md:h-24 bg-green-800 opacity-90'>
            <div className='flex gap-8 mx-40'>
                  <Link to={'/'}><img className='h-16 ml-14 mt-3  hover:scale-110 duration-300' src={logo} /></Link>
                <Link to={'/'}><p className='text-white font-bold text-5xl mt-5 font-lobster '>Secret Santa</p></Link>
            </div>

        </div>
    );
};
