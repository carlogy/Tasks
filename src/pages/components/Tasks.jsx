import React, { useState } from "react";
import Card from './Card';
import TaskItem from './TaskItem';

const Tasks = (props) => {


    return (
        <Card>
        <div className='flex mx-auto text-center'>
        <h3 className='mx-auto'>Task Name</h3>
        <h3 className='mx-auto'>Description</h3>
        <h3 className='mx-auto'>Percentage completed</h3>
        </div>
        <TaskItem
            title={props.items?.[0].title}
            notes={props.items?.[0].notes}
            percent={props.items?.[0].percent}
         />

        </Card>
    )
}

export default Tasks;