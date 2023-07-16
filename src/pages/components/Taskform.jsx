
import React from 'react';
import { useState } from 'react';
import tasks from '../../TasksList';


const Taskform = (props) => {

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    // enteredNotes: '',
    enteredPercentage: 0,
  });

const titleHandler = (event) => {

  setUserInput((prevState) => {
    return {...prevState, enteredTitle: event.target.value};
  });

}

// const noteHandler =  (event) => {
//    setUserInput({
//     ...userInput,
//     enteredNotes: event.target.value,
//    })
// }

const percentHandler = (event) => {
  setUserInput({
    ...userInput,
    enteredPercentage: event.target.value,
  })
}

// const [taskList , updateTaskList] = useState({});


const submitHandler = (event) => {
  event.preventDefault();

   const taskData = {
    id: Math.floor(Math.random() * 100),
    title: userInput.enteredTitle,
    // notes: userInput.enteredNotes,
    percentComplete: userInput.enteredPercentage,
  };


  // const taskHandler = (tasks) => {
  //   updateTaskList({
  //     ...tasks,
  //     taskData,

  //   })
  // }


  props.onSaveTaskData(taskData);

  setUserInput({
    ...userInput,
    enteredTitle: "",
    // enteredNotes: "",
    enteredPercentage: 0,

  });
  };

  return (
    <div className=' bg-blue-600 border
                    border-blue-600
                    text-white rounded '>
        <form onSubmit={submitHandler}
        className='container mx-auto flex m-1'>
            <div className='flex-auto'>
            <label className='pl-2'
            >Task Name: </label>
            <input type='text'
                  id='task'
                  value={userInput.enteredTitle}
                  autoComplete='off'
                  onChange={titleHandler}
                  className='border
                             border-solid
                             rounded
                           border-white ml-1s
                           text-black
                           hover:border-blue-700
                           px-1
                           mt-1'
                  />
            </div>
            {/* <div className='flex-auto '>
                <label>Notes:</label>
                <input type='text'
                        id='notes'
                        autoComplete='off'
                        value={userInput.enteredNotes}
                        onChange={noteHandler}
                        className='border border-solid rounded ml-1 text-black  hover:border-blue-700 hover:transition-shadow px-1s' />
            </div> */}
            <div className='flex-auto pt-1 '>
            <label className='align-middle'
            >Percentage completed: </label>
            <input type='range'
                   id='percent'
                   value={userInput.enteredPercentage}
                    min={0}
                    max={100}
                    step={25}
                    on onChange={percentHandler}
                    className='ml-1 hover:transition-shadow align-middle'
                    />
          </div>
          <div className='rounded text-center
                         bg-white border
                         border-white
                         text-blue-600
                         m-2
                         flex-auto pr-2'>
            <button  type='submit'
            className='font-bold hover:text-blue-800'>Add Task</button>
            </div>

        </form>

    </div>
  )
}

export default Taskform;