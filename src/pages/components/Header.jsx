import React from 'react';
import date from './date';

function Header() {


  return (

    <div className='container mx-auto '>
    <div className='  mt-10 mb-10 text-center  mx-auto  border border-solid rounded-md border-blue-600  bg-blue-600 '>
    <div className=''>
        <h1 className=' text-3xl  text-white'>{ date() }</h1>
    </div>
    </div>
    </div>

  );
}

export default Header