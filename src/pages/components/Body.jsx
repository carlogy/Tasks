import React from 'react';
import Taskform from './Taskform';
import Tasks from './Tasks';



function Body() {

  const tasks = [{
    id: 'e1',
    title: "Task 1",
    notes: "Welcome to your task manager",
    percent: "",
  }
]

  return (

    <div className='container mx-auto  border border-solid rounded-lg border-blue-600   border-blue-600 '>
      <Taskform  />

      <Tasks items={tasks} />
    </div>






  );
};

export default Body