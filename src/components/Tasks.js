
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, onHandleChange }) => {

    return (
        <>
         {tasks.map((task, index) => (
             <Task key={index} task={task} onDelete= {onDelete} onToggle = {onToggle}  onHandleChange={onHandleChange}/>
         ))}
            
        </>
    )
}

export default Tasks
