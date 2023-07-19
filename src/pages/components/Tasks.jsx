import React, { useState } from "react";
import Card from './Card';
import ListHeader from './ListHeader';
import TaskItem from './TaskItem';




const Tasks = (props) => {

    return (
        <div>
        <Card>
         <ListHeader />
        {props.items?.map(task => (
                <TaskItem
                key={task.id}
                title={task.title} />

                // percent={task.percent} />
         ))}
        </Card>
        </div>
    );
}

export default Tasks;