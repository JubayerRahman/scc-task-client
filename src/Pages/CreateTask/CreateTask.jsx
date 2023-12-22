import React from 'react'
import useAxios from '../../Components/Hooks/useAxios/useAxios'
import { data } from 'autoprefixer'
import Swal from 'sweetalert2'

const CreateTask = () => {
  const Axios = useAxios()
  const formfunction = (e)=>{
    e.preventDefault()
    const title = e.target.title.value
    const deadline = e.target.deadline.value
    const details = e.target.details.value
    const priority = e.target.priority.value
    if(title == "" || deadline =="" || details == "" || priority == ""){
      return Swal.fire({
        title:"fill all the fields",
        icon:"warning"
      })
    }
    const data= {title, deadline, details, priority }
    Axios.post("/tasks", data)
    .then(res => {
      Swal.fire({
        title:"task Added successfully",
        icon:"success"
      })
    })
  }
  return (
    <div onSubmit={formfunction} className=" w-full flex flex-col  items-center">
      <h1 className='text-xl'>Create a task here</h1>
      <form className=' flex flex-col gap-2 w-[100%] items-center'>
        <input className='text-xl bg-transparent border-2 outline-none p-[10px] w-[80%]' type="text" name="title" placeholder='Task title' id="" />
        <input className='text-xl bg-transparent border-2 outline-none p-[10px] w-[80%]' type="number" name="deadline" placeholder='Task dedaline' id="" />
        <textarea name='details' className='text-xl bg-transparent border-2 outline-none p-[10px] w-[80%] min-h-[250px] max-h-[250px]' placeholder='Details'/>
        <select name='priority' className='text-xl bg-transparent border-2 outline-none p-[10px] w-[80%]'>
          <option className='text-[#BF3DE2]'>priority?</option>
          <option className='text-[#BF3DE2]' value="low">Low</option>
          <option className='text-[#BF3DE2]' value="moderate">moderate</option>
          <option className='text-[#BF3DE2]' value="moderate">high</option>
        </select>
        <input className='bg-[#BF3DE2] p-[10px] text-white text-xl cursor-pointer rounded-md w-[80%] tracking-[5px]' type="submit" value="SUBMIT" />
      </form>
    </div>
  )
}

export default CreateTask
