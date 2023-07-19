import React from 'react';
import date from './date';

function Header() {


  return (

    <div className='container
                    mx-auto
                    p-1
                    m-1 '>
    <div className='mt-10 mb-10 text-center  mx-auto
                    border border-solid rounded
                    border-med-blue
                    bg-med-blue '>
    <div className=''>
        <h1 className=' text-4xl  text-cream'>{ date() }</h1>
    </div>
    </div>
    </div>

  );
}

export default Header