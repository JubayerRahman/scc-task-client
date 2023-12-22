import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Aboutus = () => {
    const [services, setServices ] = useState([])
    useEffect(()=>{
        fetch("./Services.json")
        .then(res => res.json())
        .then(data => setServices(data.packages))
    },[])
    useEffect(() => {
        Aos.init();
      }, [])
    console.log(services);
  return (
    <div data-aos="fade-down" className="aboutus">
        <div className='text-white py-[25px] lg:w-[70%] mx-auto p-[10px]'>
      <h1 className='text-2xl'>About us:</h1>
      <p>At SCC, we are at the forefront of revolutionizing task management. With a commitment to streamlining workflows and enhancing productivity, SCC provides innovative solutions that empower individuals and teams to navigate their tasks with unparalleled efficiency. Our cutting-edge technology and user-friendly interfaces create a seamless experience, ensuring that every project, big or small, is handled with precision and ease. Discover a new era of productivity with SCC, where we transform the way you work, one task at a time.</p>
    </div>
    <div>
        <h1 className='text-2xl text-white'>Services:</h1>
        {
            services?
            <div className='flex flex-col lg:flex-row p-[10px] justify-center gap-3 mx-auto'>
                {
                services.map(ser=>
                    <div className="card bg-opacity-[0.6] lg:w-[30%] bg-[#BF3DE2] shadow-xl">
                    <div className="card-body flex flex-col items-center text-white">
                        <h2 className="card-title">{ser.name}</h2>
                        <p>{ser.price}</p>
                        <h1 className='text-xl text-left font-[500]'>Features:</h1>
                        <ul className='text-left'>
                                {
                                    ser.features.map(data => <li>{data}</li>)
                                }
                        </ul>
                    </div>
                    </div>
                    )
            }
            </div>
            :
            <h1>No, servicess available</h1>
        }
    </div>
    </div>
  )
}

export default Aboutus
