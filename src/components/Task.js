import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle, onHandleChange}) => {
    return (
        <div className={`task ${task.reminder ?
             'reminder': ''}`} 
        onDoubleClick = {()=>
        onToggle(task.id) }
         >
            <h3>
            {task.text}<FaTimes style={{color:
            'red', cursor: 'pointer'}}
             onClick={()=> onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
            <p>{task.urgency}</p>
            <input type="text" name= "name"/>
            {/* onChange = {(event) => onHandleChange(event)} */}
        </div>
    )
}

export default Task
