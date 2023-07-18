import React, { useState } from "react";
import Card from './Card';
import TaskItem from './TaskItem';
import ListHeader from './ListHeader'
import tasks from "@/TasksList";





const Tasks = (props) => {



    return (
        <div>
        <Card>
         <ListHeader />
         {props.items.map(task => (
            <TaskItem
                key={task.id}
                title={task.title}
                percent={task.percent} />
         ))}
        </Card>
        </div>
    );
}

export default Tasks;