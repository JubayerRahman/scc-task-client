import React, { useContext, useEffect } from 'react'
import { AuthContent } from '../../Authprovider/AuthProvider'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
    const {user} = useContext(AuthContent)
    useEffect(() => {
      Aos.init();
    }, [])
  return (
    <div className='flex'>
      <div data-aos="fade-down" className='w-[35%] lg:w-[20%] min-h-screen border-r-2 border-[#BF3DE2]'>
      <div className='flex flex-col items-center'>
        <img className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] object-cover rounded-full' src={user?.photoURL} />
        <h1 className='text-xl'>{user?.displayName}</h1>
        <div data-aos="fade-right" className='flex flex-col items-start text-left text-white text-wrap lg:hidden gap-4 ml-[15px]'>
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
