import React from 'react'
import "./Task.css"

const Task = () => {
  return (
    <div className='TaskContainer'>
      <div className='TaskName'>
        <div className='TaskName1'>Task</div>
        <div className='TaskName1'>In Progress</div>
        <div className='TaskName1'>Priority Level</div>
        <div className='TaskName1'>Due Date</div>
        <div className='TaskName1'> Completed</div>
      </div>
      <div className='TaskItem'>
      <div className='TaskName2'></div>
        <div className='TaskName2'></div>
        <div className='TaskName2'></div>
        <div className='TaskName2'></div>
        <div className='TaskName2'></div>
      </div>
    </div>
  )
}

export default Task
