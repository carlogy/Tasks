import React from 'react';
import Taskform from './Taskform';
import Tasks from './Tasks';
import tasks from '@/TasksList';



function Body() {



  return (

    <div className='container mx-auto  border border-solid rounded-lg border-blue-600   border-blue-600 '>
      <Taskform  />

      <Tasks items={tasks} />
    </div>






  );
};

export default Body