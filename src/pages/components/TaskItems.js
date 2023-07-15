export default function TaskItems() {
let items = []
    const item1 = {
        name: "Welcome to your todo list!",
        notes: "These is a place to add additional notes about a task you need to complete.",
        percentComplete: 0
    }

    const item2 = {
        name: "Task 1",
        notes: "I need to complete this task.",
        percentComplete: 0
    }

    const item3 = {
        name: "Task 2",
        notes: "Another task I have to complete!",
        percentComplete: 0
    }


const listItems = [item1, item2, item3];

    return (
     listItems
    );
}