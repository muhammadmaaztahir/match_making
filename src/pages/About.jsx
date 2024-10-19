// About.jsx
import React from 'react';
import Heroseation from '../Component/About/Heroseation';
import Imgparagrap from '../Component/About/Imgparagrap';
import HowItWorks from '../Component/About/HowItWorks ';
import step1 from '../assets/step1.png'
import step2 from '../assets/step2.png'
import step3 from '../assets/step3.png'
import step4 from '../assets/step4.png'
import step5 from '../assets/step5.png'
import DescriptionWithIcon from '../Component/DescriptionWithIcon';

const About = () => {
  return (
    <>
      <Heroseation />
   
    <div className='mt-5 container mx-auto flex gap-10 p-10'>
    <DescriptionWithIcon image={step1} />
    <DescriptionWithIcon image={step2} />
    <DescriptionWithIcon image={step3} />
    <DescriptionWithIcon image={step4} />
    <DescriptionWithIcon image={step5} />
    </div>
      <Imgparagrap />
      <HowItWorks />
    </>
  );
};

export default About;
