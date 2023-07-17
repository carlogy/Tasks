import React, { useState } from "react";
import Card from "./Card";
import tasks from "@/TasksList";



const TaskItem = (props) => {

    const [percent, setPercent] = useState(props.percent.toString());

    const clickHandler = (event) => {
        setPercent('Updated');
    };

return (

        <div className='flex  text-blue-600 mt-4'>
        <div className='flex-1 text-left'>
            <h2 className="pl-2"
            >{props.title}</h2>
        </div>
        {/* <div className='mx-auto'>
            <h2>{props.notes}</h2>
        </div> */}
        <div className='flex-auto text-center'>
            <h2 className='pr-2'
             onClick={clickHandler}
            >{percent}%</h2>
        </div>
        </div>

);
}

export default TaskItem