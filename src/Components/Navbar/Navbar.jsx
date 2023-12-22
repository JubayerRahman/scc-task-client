import { CiMenuFries } from "react-icons/ci";
import logo from "../../assets/ph_logo.svg"
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContent } from "../../Authprovider/AuthProvider";

const Navbar = () => {
    const [showingMenu, setShowMneu] = useState("hidden")
    const [summent, setsubment] = useState("hidden")

    const {user, logout} = useContext(AuthContent)
    const submenushow =()=>{
      if (summent == "hidden") {
        setsubment("block")
      }
      if (summent == "block") {
        setsubment("hidden")
      }
    }
    useEffect(()=>{
      if (user == null) {
        setsubment("hidden")
      }
    },[user])
      const navLinks = 
      <>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About us</li>
      </Link>
        {
          user?
          <div onClick={submenushow}>
              <div className="flex gap-2 items-center bg-[#BF3DE2] p-[5px] rounded-full">
                <img className="profile  w-[50px] h-[50px] rounded-full" src={user.photoURL} alt={user.displayName}/>
                <h1>{user.displayName}</h1>
              </div>
          </div>
          :
          <Link to="/login">
          <li className='bg-[#BF3DE2] p-[10px] text-white rounded-md'> Login </li>
          </Link>
        }
      </>
    const showFunction = ()=>{
        if (showingMenu == "hidden") {
            setShowMneu("block")
        }
        else{
            setShowMneu("hidden")
            setsubment("hidden")
        }
    }

  return (
    <div>
      <div className='container mx-auto lg:flex justify-between items-center p-[15px] text-white pb-[20px]'>
        <div className='flex justify-between items-center w-[100%] lg:w-fit'>
            <h1 className='text-2xl lg:text-5xl text-left'>SCC </h1>
      <CiMenuFries onClick={showFunction} className="text-[#BF3DE2] block lg:hidden text-2xl rounded-sm " />
        </div>
      <div className={`${showingMenu} lg:flex`}>
        <ul className='flex flex-col md:flex-row p-[10px] items-center gap-5 cursor-pointer'>
            {navLinks}
        </ul>
      </div>
    </div>
    <div className={`${summent} flex flex-col gap-3 items-center justify-center`}>

        <Link className="text-white" to="/Dashboard"><h1>Dashboard</h1></Link>
        <button onClick={logout} className={`bg-[#BF3DE2] border-2 border-[#BF3DE2] cursor-pointer w-full lg:w-[20%] rounded-md text-xl text-white p-[10px]`}>Log out</button>
    </div>
    </div>
  )
}

export default Navbar
