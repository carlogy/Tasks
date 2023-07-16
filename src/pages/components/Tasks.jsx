import React, { useState } from "react";
import Card from './Card';
import TaskItem from './TaskItem';
import ListHeader from './ListHeader'
import tasks from "@/TasksList";





const Tasks = (props) => {



    return (
        <Card>
         <ListHeader />


         {tasks.map((item) => (
            <TaskItem
                key={item.id}
                title={item.title}
                percent={item.percent} />
         )
         )}
        </Card>
    )
}

export default Tasks;