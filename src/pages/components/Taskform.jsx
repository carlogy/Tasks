
import React, { useState }  from 'react';

const Taskform = (props) => {

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    // enteredNotes: '',
    enteredPercentage: 0,
  });

const titleHandler = (event) => {

  setUserInput((prevUserInput) => {
    return {...prevUserInput, enteredTitle: event.target.value};
  });

}

// const noteHandler =  (event) => {
//    setUserInput({
//     ...userInput,
//     enteredNotes: event.target.value,
//    })
// }

// const percentHandler = (event) => {
//   setUserInput((prevUserInput) => {
//     return {...prevUserInput, enteredPercentage: event.target.value}
//   });
// };

const submitHandler = (event) => {
  event.preventDefault();

   const taskData = {
    id: Math.floor(Math.random() * 100),
    title: userInput.enteredTitle,
    // notes: userInput.enteredNotes,
    percent: userInput.enteredPercentage,
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
    <div className='border
                    bg-med-blue
                    border-med-blue
                    text-cream
                    rounded
                    shadow-lg
                    relative
                    top-1
                    mb-2
                    align-middle
                    focus:outline-double
                    '>
        <form onSubmit={submitHandler}
        className='container mx-auto flex mt-4 p-1 '>
            <div className='flex-auto align-middle p-1'>
            <label className='pl-2'>New Task: </label>
            <input
                  type='text'
                  id='task'
                  value={userInput.enteredTitle}
                  autoComplete='off'
                  onChange={titleHandler}
                  className='border
                             border-solid
                             rounded
                           border-cream
                           text-med-blue
                           hover:border-dark-blue
                           px-2
                           m-2
                           w-11/12
                           align-middle
                           shadow-md
                           transition ease-in-out
                           '
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
            {/* <div className='flex-auto pt-1 '>
            <label className='align-middle'
            >Percentage completed: </label>
            <input type='range'
                   id='percent'
                   value={userInput.enteredPercentage}
                    min={0}
                    max={100}
                    step={25}
                    onChange={percentHandler}
                    className='ml-1 hover:transition-shadow align-middle'
                    />
          </div> */}
          <div className='rounded
                         bg-cream border
                         border-cream
                         text-med-blue
                         mb-3
                         mr-2
                         flex-shrink
                         align-middle
                         hover:border-med-blue
                         shadow-md
                         '>
            <button  type='submit'
            className='font-bold text-center p-3'>Add Task</button>

            </div>

        </form>

    </div>
  )
}

export default Taskform;