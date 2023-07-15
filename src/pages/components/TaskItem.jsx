import React, { useState } from "react";
import Card from "./Card";

const TaskItem = (props) => {

return (
    <Card>
        <div className='flex mx-auto text-center'>
        <div className='mx-auto'>
            <h2>{props.title}</h2>
        </div>
        <div className='mx-auto'>
            <h2>{props.notes}</h2>
        </div>
        <div className='mx-auto'>
            <h2>{props.percent}</h2>
        </div>
        </div>
    </Card>
);
}

export default TaskItem