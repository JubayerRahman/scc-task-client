import React, { useContext } from 'react'
import { AuthContent } from '../../Authprovider/AuthProvider'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
    const {user} = useContext(AuthContent)
  return (
    <div className='flex'>
      <div className='w-[35%] lg:w-[20%] min-h-screen border-r-2 border-[#BF3DE2]'>
      <div className='flex flex-col items-center'>
        <img className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover rounded-full' src={user?.photoURL} />
        <h1 className='text-xl'>{user?.displayName}</h1>
        <div className='flex flex-col items-start text-left text-white text-wrap lg:hidden gap-4 ml-[15px]'>
            <NavLink to="/Dashboard/createtask"><h1>Create Tasks</h1></NavLink>
            <NavLink to="/Dashboard/tasklist"><h1>Tasks List</h1></NavLink>
            <NavLink to="/Dashboard/completedtask"><h1>Completed Tasks</h1></NavLink>
        </div>
        </div>
      </div>
      <div className='text-white flex flex-col items-center lg:items-start gap-4 dasboard flex-1'>
        <div className='hidden lg:flex gap-4 ml-[15px]'>
            <NavLink to="/Dashboard/createtask"><h1>Create Tasks</h1></NavLink>
            <NavLink to="/Dashboard/tasklist"><h1>Tasks List</h1></NavLink>
            <NavLink to="/Dashboard/completedtask"><h1>Completed Tasks</h1></NavLink>
        </div>
        <div className='w-full'>
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
