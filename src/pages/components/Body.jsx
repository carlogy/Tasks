import React from 'react';
import Taskform from './Taskform';
import Tasks from './Tasks';
import tasks from '@/TasksList';



function Body() {

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
    };
    console.log(taskData);
  };

  return (

    <div className='container mx-auto'>
      <Taskform
        onSaveTaskData = {saveTaskDataHandler}
        />

      <Tasks items={tasks} />
    </div>






  );
};

export default Body