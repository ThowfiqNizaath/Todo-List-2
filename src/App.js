
// import React from 'react';
// import { useState } from 'react';
// import './App.css';
// import { useEffect } from 'react';
// import Header from './Header';
// import TaskInput from './TaskInput';
// import TaskList from './TaskList';
// import Footer from './Footer';


// function App() {
//    const [tasks , setTasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[])
//    const [theme , setTheme] = useState(localStorage.getItem("theme")|| 'light')

//    useEffect(() => {
//       localStorage.setItem('tasks', JSON.stringify(tasks));
//       localStorage.setItem('theme' ,theme)
//    },[tasks , theme])


//    const addTask = (task) => {
//     setTasks([...tasks , {id: tasks.length ? tasks.length + 1 : 1 , text : task , completed : false}])
//    }

//    const deleteTask = (id) => {
//      setTasks(tasks.filter((task) => task.id !== id))
//    };

//    const toggleCompletion = (id) => {
//     setTasks(
//       tasks.map((task) => task.id === id ?{...task , completed : !task.completed} : task )
//     )
//    }

//    const editTask = (id,newText) => (
//      setTasks(
//       tasks.map((task) => task.id === id ? {...task , text : newText} : task 
//     )
//   )
// )

// const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light')
// }

// const clearTasks = () => {
//   setTasks([])
// }

// return (
//   <div className = {`app ${theme}`}>
//      <Header theme={theme} toggleTheme = {toggleTheme}/>
//      <TaskInput  addTask={addTask} />
//      <TaskList 
//       tasks = {tasks} 
//       deleteTask = {deleteTask}
//       toggleCompletion = {toggleCompletion}
//       editTask = {editTask}
//      />
//     <Footer taskCount = {tasks.length} clearTasks = {clearTasks} />
//   </div>
// )

// }
// export default App


import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import Footer from './Footer'

const App = () => {
  const [tasks , setTasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[])
  const [theme , setTheme] = useState(localStorage.getItem('theme')||'light')

  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks))
    localStorage.setItem('theme',theme)
  },[tasks,theme])

  const addTask = (newTask) => {
     setTasks([...tasks, {id : tasks.length ? tasks.length + 1 : 1 , name : newTask , completed : false}])
  }

  const deleteTask = (id) => {
  
      const filteredTask= tasks.filter((task) => task.id !== id)
      var idnum = 1;
      setTasks(
        filteredTask.map((task) => (
          {...task , id : idnum++}
        ))
      );
  }

  const editTask = (id , newTask) =>{
    setTasks(
      tasks.map((task) => task.id === id ? {...task , name : newTask} : task)
    )
  }

  const clearAllTask = () => {
    setTasks([])
  }

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map(task => task.id === id ? {...task , completed : !task.completed} : task)
    )
  }

  const handleTheme = () => {
    setTheme(
      theme === 'light' ? 'dark' : 'light'
    )
  }
  return (
    <div className = {`app ${theme}`}>
      <Header 
       theme = {theme}
       handleTheme = {handleTheme}
      />
      <TaskInput  addTask = {addTask} />
      <TaskList
       tasks = {tasks}
       deleteTask = {deleteTask}
       editTask = {editTask}
       toggleCompletion = {toggleCompletion}
       />
       <Footer 
        length={tasks.length}
        clearAllTasks={clearAllTask} />
    </div>
  )
}

export default App