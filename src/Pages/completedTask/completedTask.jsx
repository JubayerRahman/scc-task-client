import React, { useEffect, useState } from 'react'
import useAxios from '../../Components/Hooks/useAxios/useAxios'

const CompletedTask = () => {
  const Axios = useAxios()
  const [completetasks, setCompleteTasks] = useState()
  useEffect(()=>{
    Axios("/completeTasks")
    .then(res => setCompleteTasks(res.data))
  },[])
  return (
    <div>
      <h1>Completed tasks</h1>
      {
        completetasks?
        <div>
          {
            completetasks.map(task => 
              <div className='border-2 flex flex-col mb-[20px] items-start rounded-md p-[10px] w-[90%] mx-auto' key={task._id}>
                <h1>Name: {task.title}</h1>
                <h1>Details: {task.details}</h1>
                <h1>Deadline: {task.deadline} days</h1>
                <h1>Priority: {task.priority}</h1>
                <h1>Status: Completed</h1>
              </div>
              )
          }
        </div>
        :
        <h1>No Tasks are completed.</h1>
      }
    </div>
  )
}

export default CompletedTask
