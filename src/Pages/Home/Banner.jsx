import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        Aos.init();
      }, [])
  return (
    <div data-aos="fade-right" className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Welcome to SCC, where seamless task management meets unparalleled efficiency, empowering you to conquer your daily goals with precision and ease.</h1>
      <Link to="/Dashboard">
      <button className="btn btn-primary">Explore more</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default Banner
