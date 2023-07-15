import React, { useState } from "react";
import Card from "./Card";

const TaskItem = (props) => {

    const [percent, setPercent] = useState(props.percent);

    const clickHandler = () => {
        setPercent('Updated');
    };

return (
    <Card>
        <div className='flex text-center  text-blue-600 mt-4'>
        <div className='flex-auto'>
            <h2>{props.title}</h2>
        </div>
        {/* <div className='mx-auto'>
            <h2>{props.notes}</h2>
        </div> */}
        <div className='flex-auto'        >
            <h2 onClick={clickHandler}
            >{percent}%</h2>
        </div>
        </div>
    </Card>
);
}

export default TaskItem