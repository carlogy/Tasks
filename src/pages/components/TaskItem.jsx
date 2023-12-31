import React, { useState } from "react";

const TaskItem = (props) => {

    // const [percent, setPercent] = useState(props.percent);

    // const clickHandler = (event) => {
    //     setPercent('Updated');
    // };

    const [crossOut, setCrossOut] = useState(false);

return (

        <div className='flex  text-med-blue mt-4'>
        {/* <div>
            <input
            type="checkbox"
                className="border
                           rounded
                           border-blue-600
                           hover:to-blue-800"/>
        </div> */}
        <div className='flex-auto'>
            <h2 className={`pl-2 ${crossOut ? "line-through" : "" }`}>{props.title}</h2>
        </div>
            {/* <div className='mx-auto'>
                <h2>{props.notes}</h2>
            </div> */}
        {/* <div className='flex-auto text-center'>
            <h2 className='pr-4'


            >{percent}%</h2>
        </div> */}
        <div className="flex-end pr-1 pb-1">
        <button onClick={() => setCrossOut((crossedOut) => !crossedOut)}
                className="bg-med-blue
                           border-med-blue
                           border
                           rounded
                           text-cream
                           hover:border-dark-blue
                           transition ease-in-out
                           delay-75
                           ">
        Complete</button>
        </div>
        </div>

);
}

export default TaskItem;