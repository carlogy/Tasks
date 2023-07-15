
import React from 'react';
import { useState } from 'react';


const Taskform = () => {

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredNotes: '',
    enteredPercentage: 0,
  });



const titleHandler = (event) => {

  setUserInput((prevState) => {
    return {...prevState, enteredTitle: event.target.value};
  });

}

const noteHandler =  (event) => {
   setUserInput({
    ...userInput,
    enteredNotes: event.target.value,
   })
}

const percentHandler = (event) => {
  setUserInput({
    ...userInput,
    enteredPercentage: event.target.value,
  })
}

const submitHandler = (event) => {
  event.preventDefault();

  const taskData = {
    title: userInput.enteredTitle,
    notes: userInput.enteredNotes,
    percentComplete: userInput.enteredPercentage,
  };

  console.log(taskData);
  setUserInput({
    ...userInput,
    enteredTitle: "",
    enteredNotes: "",
    enteredPercentage: 0,
  });
  };



  return (
    <div className=' flex-row text-center'>
        <form onSubmit={submitHandler}>
            <div className='inline-flex'>
            <label for='task' >Task Name: </label>
            <input type='text'
                  id='task'
                  value={userInput.enteredTitle}
                  autoComplete='off'
                  onChange={titleHandler}
                  className='border border-solid rounded border-blue-600'
                  />
            </div>
            <div className='inline-flex'>
                <label for='notes' >Notes:</label>
                <input type='text'
                        id='notes'
                        autoComplete='off'
                        value={userInput.enteredNotes}
                        onChange={noteHandler}
                        className='border border-solid rounded' />
            </div>
            <div className='inline-flex'>
            <label for='percent' >Percentage completed: </label>
            <input type='range'
                   id='percent'
                   value={userInput.enteredPercentage}
                    min={0}
                    max={100}
                    step={25}
                    on onChange={percentHandler} />
            </div>
            <div className='rounded  bg-blue-600 border border-blue-600 text-white'>
            <button type='submit' >Add Task</button>
            </div>
        </form>
    </div>
  )
}

export default Taskform;