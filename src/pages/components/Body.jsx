import React, { useState } from 'react';
import Taskform from './Taskform';
import Tasks from './Tasks';

import Initial_tasks from '@/TasksList';



function Body(props) {

  const [tasks, setTasks] = useState(Initial_tasks);

  const saveTaskDataHandler = (task) => {
    setTasks((prevTasks) => {
      console.log("prevTasks:" ,prevTasks);
      console.log("task", task);
      return[...prevTasks, task];
    });
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