import React from 'react'
import heroImg from '../assets/heroImg.png'
import step1 from '../assets/step1.png'

const Home = () => {
  return (
    <div>
      <img src={heroImg} alt="" />
      <h1 className='text-center uppercase text-md text-[#159EEC] font-bold mt-10'>steps to find your bashert</h1>
      <p className='text-center uppercase w-[50%] mx-auto mt-3'>The  matchmaking process is designed so that your Jewish dating experience is simplified, personalized and efficient. Thousands of Jewish singles of various cultures, backgrounds, ages & interests have found their match & we want to help you too.</p>
      <div className='flex container mx-auto'>
        <div className='mx-auto bg-red-400 p-10 flex flex-col items-center'>
            <h1>create profile</h1>
            <img className='w-fit' src={step1} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        </div>
        <div className='mx-auto bg-red-400'>
            <h1>create profile</h1>
            <img src={step1} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        </div>
        <div className='mx-auto bg-red-400'>
            <h1>create profile</h1>
            <img src={step1} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        </div>
        <div className='mx-auto bg-red-400'>
            <h1>create profile</h1>
            <img src={step1} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        </div>
        <div className='mx-auto bg-red-400'>
            <h1>create profile</h1>
            <img src={step1} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        </div>
      </div>
    </div>
  )
}

export default Home
