// import React from 'react'

// const Footer = ({taskCount, clearTasks}) => {
//   return (
//     <footer className = 'footer'>
//         <span>Total Tasks : {taskCount}</span>
//         <button onClick={clearTasks}>Clear All Tasks</button>
//     </footer>
//   )
// }

// export default Footer

import React from 'react'

const Footer = ({length , clearAllTasks}) => {
  return (
   <footer>
      <div>
        <span>Total Task : {length}</span>
      </div>
      <button onClick= {()=> clearAllTasks()}>Clear All Tasks</button>
   </footer>
  )
}

export default Footer