// import React from 'react'
// import { useState } from 'react'


// const TaskInput = ({addTask}) => {

//     const [task , setTask] = useState('')

//     const handleSumbit = (e) => {
//         e.preventDefault();
//         if(task){
//             addTask(task)
//             setTask('')
//         }
//     }

//   return (
//     <form onSubmit={handleSumbit} className = "task-input" >
//         <input
//            type = 'text'
//            value = {task}
//            onChange={(e) => setTask(e.target.value)}
//            placeholder='Enter a new task'
//         />
//         <button type="submit" >Add Task</button>
//     </form>
//   )
// }

// export default TaskInput

import React from 'react'
import { useState } from 'react'

const TaskInput = ({addTask}) => {
     
    const [task , setTask] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        if(task){
            addTask(task)
            setTask("")
        }
    }
  return (
     <form className='task-input' onSubmit={(e)=> handleSubmit(e)}>
        <input 
        type="text"
        value = {task}
         placeholder='Add new task'
         onChange={(e) => setTask(e.target.value)}
         />
        <button type="submit">Add Task</button>
     </form>
  )
}

export default TaskInput