// import React from 'react'

// const TaskList = ({tasks , deleteTask, toggleCompletion , editTask}) => {

//     const handleEdit = (id , newText) => {
//         if(newText.trim()){
//             editTask(id, newText)
//         }
//     }

//   return (
    
//     <ul className="task-list">
//        {
//         tasks.map((task) => (
//             <li key ={task.id} className ={task.completed ? 'completed' : 'list'} >
//                 <input 
//                     type = "text"
//                     value = {task.text}
//                     onChange={(e) => 
//                         handleEdit(task.id , e.target.value)
//                     }
//                     className="task-text"/>
//                 <div className="task-actions">
//                     <button onClick= {() => toggleCompletion(task.id)}>
//                         {task.completed ? 'Undo' : 'Complete'}
//                     </button>
//                     <button onClick={() => 
//                         deleteTask(task.id) }>
//                          Delete
//                     </button>
//                 </div>
//             </li>
//         ))
//        }
//     </ul>
//   )
// }

// export default TaskList

import React from 'react'
import { useState } from 'react'
const TaskList = ({tasks , deleteTask , editTask , toggleCompletion}) => {
    function handleEdit(id , task){
        if(task){
            editTask(id , task)
        }
    }
  return (
     <ul className="task-list">
        {
            tasks.map((task) => (
                <li key = {task.id} className={task.completed ? 'completed' : ''} >
                   <input value= {task.name} 
                   onChange={(e) => handleEdit(task.id , e.target.value)}
                   className = "edit-task"/>
                   <div className="actions">
                     <button 
                      onClick ={ () => toggleCompletion(task.id)}
                     >
                        {
                            task.completed ? 'Undo' : 'Complete'
                        }
                     </button>
                     <button onClick={() => deleteTask(task.id)}>Delete</button>
                   </div>
                </li>
            ))
        }
     </ul>
  )
}

export default TaskList