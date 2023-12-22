import { createContext, useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContent } from "../../Authprovider/AuthProvider"
import Swal from "sweetalert2"


const Login = () => {
    const {login} = useContext(AuthContent)
    const navigate = useNavigate()
    const location = useLocation()

    const formFunction = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        if (email == "" || password =="") {
            return Swal.fire({
                title:"please fill all the fields",
                icon:"warning"
            })
            
        }

        login(email, password)
        .then(res=>{
          if (location?.state) {
            navigate(location.state)
          }
          else{
            navigate("/")
          }
          return Swal.fire({
            title:"Logged in successfully",
            icon:"success"
          })
        })
        .catch(error => {
          Swal.fire({
            title:error.message,
            icon:"error"
          })
        })
    
    }

  return (
    <div className='loginpage flex items-center h-screen'>
      <div className=' lg:w-[50vw] p-[20px]'>
        <h1 className="text-5xl text-[#E1AAFF] font-[500] pb-[20px]">Login Now</h1>
        <form onSubmit={formFunction} className='flex flex-col items-center justify-evenly gap-5 '>
            <input className='outline-none p-[10px] text-xl bg-transparent text-white w-full lg:w-[80%] border-2 border-[#BF3DE2] rounded-md' type="email" name="email" placeholder='Your Email' id="" />
            <input className='outline-none p-[10px] text-xl bg-transparent text-white w-full lg:w-[80%] border-2 border-[#BF3DE2] rounded-md' type='password' name='password' placeholder='Your password'/>
            <input className="bg-[#BF3DE2] border-2 border-[#BF3DE2] cursor-pointer w-full lg:w-[80%] rounded-md text-xl text-white p-[10px]" type="submit" value="Login" />
        </form>
      <h1 className="text-xl text-white pt-[10px]">Don't have an account? <Link className="text-[#BF3DE2]" to="/register">Register</Link></h1>
      </div>
    </div>
  )
}

export default Login
