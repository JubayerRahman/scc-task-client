import React, { useEffect, useState } from 'react'
import useAxios from '../../Components/Hooks/useAxios/useAxios'
import Swal from 'sweetalert2'
import Aos from 'aos';
import 'aos/dist/aos.css';

const TaskList = () => {
  const Axios = useAxios()
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    Aos.init();
  }, [])

  useEffect(()=>{
    Axios("/tasks")
    .then(res=> setTasks(res.data))
  },[tasks])

  const deleteTask = id =>{
    Axios.delete(`/tasks/${id}`)
    .then(res=>{
      if (res.data.deletedCount>0) {
        Swal.fire({
          title:"Task deleted!!",
          icon:"success"
        })
      }
    })
  }

  const completeFunction  = (id, title, details, priority, deadline) =>{
    const completeTask = {title, details,priority, deadline}

    Axios.post("/completeTasks", completeTask)
    .then(res=> {
      if (res.data) {
        Swal.fire({
          title:"task Added successfully",
          icon:"success"
        })
      }
    })
    Axios.delete(`/tasks/${id}`)
    .then(res=>{
    console.log("done");
    })
  }
  return (
    <div data-aos="fade-down">
      {
        tasks?
        <div>
          {
            tasks.map(task => 
              <div className='border-2 flex flex-col mb-[20px] items-start rounded-md p-[10px] w-[90%] mx-auto' key={task._id}>
                <h1>Name: {task.title}</h1>
                <h1>Details: {task.details}</h1>
                <h1>Deadline: {task.deadline} days</h1>
                <h1>Priority: {task.priority}</h1>
                <div className='buttons flex flex-col lg:flex-row w-full p-[10px] gap-5 justify-evenly border-t-2'>
                  {/* <button className='p-[10px] bg-[yellow] rounded-lg w-full'>Update</button> */}
                  <button onClick={()=> deleteTask(task._id)} className='p-[10px] bg-[red] rounded-lg w-full'>Delete</button>
                  <button onClick={()=> completeFunction(task._id, task.title, task.details, task.priority, task.deadline)} className='p-[10px] bg-[green] rounded-lg w-full'>Complete</button>
                </div>
              </div>
              )
          }
        </div>
        :
        <h1>Wait for the tasks to load</h1>
      }
    </div>
  )
}

export default TaskList
