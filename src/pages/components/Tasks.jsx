import React, { useState } from "react";
import Card from './Card';
import TaskItem from './TaskItem';
import ListHeader from './ListHeader'


const Tasks = (props) => {


    return (
        <Card>

        <ListHeader />
        <TaskItem
            title={props.items?.[0].title}
            // notes={props.items?.[0].notes}
            percent={props.items?.[0].percent}
         />
         <TaskItem
            title={props.items?.[1].title}
            percent={props.items?.[1].percent} />

        </Card>
    )
}

export default Tasks;