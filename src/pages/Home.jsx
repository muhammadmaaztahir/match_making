import React from 'react'
import heroImg from '../assets/heroImg.png'
import Carousel from '../components/Carousel'
import DescriptionWithIcon from '../components/DescriptionWithIcon'
import step1 from '../assets/step1.png'
import step2 from '../assets/step2.png'
import step3 from '../assets/step3.png'
import step4 from '../assets/step4.png'
import step5 from '../assets/step5.png'
import banner from '../assets/banner.png'

const Home = () => {
  return (
    <div>
      <img src={heroImg} alt="" />
      <h1 className='text-center uppercase text-md text-[#159EEC] font-bold mt-10'>steps to find your bashert</h1>
      <p className='text-center uppercase w-[50%] mx-auto mt-3'>The  matchmaking process is designed so that your Jewish dating experience is simplified, personalized and efficient. Thousands of Jewish singles of various cultures, backgrounds, ages & interests have found their match & we want to help you too.</p>
      <div className='flex container mx-auto'>
        <div className='mx-auto gap-7 p-10 flex flex-col items-center justify-center'>
            <h1 className='text-[#159EEC] uppercase font-bold'>create profile</h1>
            <DescriptionWithIcon image={step1} />
        </div>
        <div className='mx-auto gap-7 p-10 flex flex-col items-center justify-center'>
            <h1 className='text-[#159EEC] uppercase font-bold'>select matchmaker</h1>
            <DescriptionWithIcon image={step2} />
        </div>
        <div className='mx-auto gap-7 p-10 flex flex-col items-center justify-center'>
            <h1 className='text-[#159EEC] uppercase font-bold'>receive matches</h1>
            <DescriptionWithIcon image={step3} />
        </div>
        <div className='mx-auto gap-7 p-10 flex flex-col items-center justify-center'>
            <h1 className='text-[#159EEC] uppercase font-bold'>start dating</h1>
            <DescriptionWithIcon image={step4} />
        </div>
        <div className='mx-auto gap-7 p-10 flex flex-col items-center justify-center'>
            <h1 className='text-[#159EEC] uppercase font-bold'>support</h1>
            <DescriptionWithIcon image={step5} />
        </div> 
        
      </div>
        
      <div className='container mx-auto text-center'>
        <h1 className='text-4xl'>Lessons In Love</h1>
        <p className='text-xl font-light pt-2'>The Premier Guide to Modern Matchmaking</p>
        <Carousel/>
      </div>

      <div>
        <img className='pt-20' src={banner} alt="" />
      </div>
    </div>
  )
}

export default Home
