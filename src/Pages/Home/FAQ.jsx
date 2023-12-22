import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

const FAQ = () => {
    useEffect(() => {
        Aos.init();
      }, [])
      
  return (
                <div data-aos="fade-up"  className='p-[10px] flex flex-col gap-3 text-white'>
                    <h1 className='lg:text-5xl font-[500] my-[50px] text-[#BF3DE2]'>FAQ about us:</h1>
                <div className="collapse bg-[#BF3DE2]">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
            What makes SCC Task Management different from other solutions?
            </div>
            <div className="collapse-content"> 
                <p>SCC Task Management stands out with its intuitive interface, customizable workflows, and seamless collaboration features. It offers a user-friendly experience, adapts to various needs, and ensures optimal productivity for individuals and teams.</p>
            </div>
                </div>
                <div className="collapse bg-[#BF3DE2]">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
            Can SCC Task Management integrate with other tools we use?
            </div>
            <div className="collapse-content"> 
                <p>Yes, SCC seamlessly integrates with popular productivity tools, creating a cohesive work environment. Connect with calendars, communication platforms, and file-sharing services to centralize your workflow and enhance collaboration.</p>
            </div>
                </div>
                <div className="collapse bg-[#BF3DE2]">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
            How secure is our data with SCC Task Management?
            </div>
            <div className="collapse-content"> 
                <p>We take the security of your data seriously. SCC Task Management employs robust security measures to ensure the confidentiality and integrity of your information. Your data is protected against unauthorized access and breaches.</p>
            </div>
                </div>
                <div className="collapse bg-[#BF3DE2]">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
            Is there a trial period for SCC Task Management?
            </div>
            <div className="collapse-content"> 
                <p>Yes, we offer trial periods for all our plans. The duration varies by plan, allowing you to explore the features and benefits of SCC Task Management. Take advantage of the trial to experience firsthand how SCC can enhance your task management.</p>
            </div>
                </div>
                <div className="collapse bg-[#BF3DE2]">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
            What level of support is provided with SCC Task Management plans?
            </div>
            <div className="collapse-content"> 
                <p>SCC Task Management offers different support levels based on your plan. Standard Support is available for the Basic Plan, Priority Support for the Standard Plan, and Premium Support for the Premium Plan. Premium Support includes 24/7 assistance and priority access to new features.</p>
            </div>
                </div>
    </div>
  )
}

export default FAQ
