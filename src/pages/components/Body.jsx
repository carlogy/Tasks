import React from 'react';
import Taskform from './Taskform';


function Body() {

  return (

    <div className='container mx-auto  border border-solid rounded-lg border-blue-600   border-blue-600 '>
    <div className='flex mx-auto text-center'>
    <h3 className='mx-auto'>Task Name</h3>
    <h3 className='mx-auto'>Description</h3>
    <h3 className='mx-auto'>Percentage completed</h3>
    </div>

    <Taskform />
    </div>



  );
};

export default Body