import axios from 'axios'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContent } from '../../Authprovider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import auth from '../../Firebase/Firebase'

const Register = () => {
    const {CreateUser} = useContext(AuthContent)
    const {register, handleSubmit} = useForm()
    const ImageURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API}`
    const navigate = useNavigate()

    const registerFunction = (e)=>{
        e.preventDefault()
        const form = new FormData()
        const image = e.target.image.files[0]
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const data = {image, name, email, password}

        if(image == undefined || name == "" || email =="" || password == ""){
            return Swal.fire({
                title:"fill all the fields",
                icon:"warning"
            })
        }

        if(password.length <6){
            return Swal.fire({
                title:"password must be more then 6 characters",
                icon:"warning"
            })
        }

        form.append("image", image )
        axios.post(ImageURL, form, {
          headers: {
            "content-type": "multipart/form-data",
          }
        })
        .then(res=>{
            if (res?.data?.data?.display_url) {
                const imageLink = res.data.data.display_url 
                CreateUser(email, password)
                .then(res=>{
                    updateProfile(auth.currentUser,{
                        displayName: `${name}`,
                        photoURL:`${imageLink}`
                    })
                    Swal.fire({
                        title:"Account Created Successfully",
                        icon:"success"
                    })
                    navigate("/")
                    setTimeout(()=>{
                      window.location.reload()
                    }, 3000)
                })
                .catch(error=>{
                    return Swal.fire({
                        title:`${error.message}`,
                        icon:"error"
                    })
                })
            }
        })

        console.log(data)
    }

  return (
    <div className='loginpage flex items-center h-screen'>
      <div className=' lg:w-[50vw] p-[20px] bg-[#010313] bg-opacity-[0.6] rounded-lg h-fit'>
        <h1 className="text-5xl text-[#E1AAFF] font-[500] pb-[20px]">Register Here!!</h1>
        <form onSubmit={registerFunction} className='flex flex-col items-center justify-evenly gap-5 '>
            <input className='outline-none p-[10px] text-xl bg-transparent text-white w-full lg:w-[80%] border-2 border-[#BF3DE2] rounded-md' type="file" accept="image/png, image/gif, image/jpeg" name='image' {...register("image")} placeholder='Your Name' id="" />
            <input className='outline-none p-[10px] text-xl bg-transparent text-white w-full lg:w-[80%] border-2 border-[#BF3DE2] rounded-md' type="text" name='name' {...register("name", {required:true})} placeholder='Your Name' id="" />
            <input className='outline-none p-[10px] text-xl bg-transparent text-white w-full lg:w-[80%] border-2 border-[#BF3DE2] rounded-md' type="email" name='email' {...register("email", {required:true})} name="email" placeholder='Your Email' id="" />
            <input className='outline-none p-[10px] text-xl bg-transparent text-white w-full lg:w-[80%] border-2 border-[#BF3DE2] rounded-md' type='password' name='password' {...register("password", {required:true, minLength:6})} placeholder='Your password'/>
            <input className="bg-[#BF3DE2] border-2 border-[#BF3DE2] cursor-pointer w-full lg:w-[80%] rounded-md text-xl text-white p-[10px]" type="submit" value="Register" />
        </form>
      <h1 className="text-xl text-white pt-[10px]">Already have an account? <Link className="text-[#BF3DE2]" to="/login">login</Link></h1>
      </div>
    </div>
  )
}

export default Register
