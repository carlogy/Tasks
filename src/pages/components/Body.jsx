import React, { useState } from 'react';
import Initial_tasks from '@/TasksList';
import Taskform from './Taskform';
import Tasks from './Tasks';


function Body() {

  const [tasks, setTasks] = useState(Initial_tasks);


  const saveTaskDataHandler = (task) => {
    setTasks((prevTasks) => {
      // console.log("prevTasks:" ,prevTasks);
      // console.log("task", task);
      // console.log(tasks)
      return[...prevTasks, task];
    });
  };






  return (

    <div className='container
                    mx-auto
                    bg-light-blue
                    border-light-blue
                    rounded
                    shadow-lg
                    px-1'>
      <Taskform
        onSaveTaskData = {saveTaskDataHandler} />
      <Tasks items={tasks} />
    </div>






  );
};

export default Body