import React from 'react';
import date from './date';

function Header() {


  return (

    <div className='relative h-80 container mx-auto '>
    <div className=' h-40 mt-40 text-center mx-auto  border border-solid rounded-md border-blue-600  bg-blue-600 absolute inset-0'>
    <div className='mt-20 inset-0'>
        <h1 className=' text-3xl  text-white'>{ date() }</h1>
    </div>
    </div>
    </div>

  );
}

export default Header