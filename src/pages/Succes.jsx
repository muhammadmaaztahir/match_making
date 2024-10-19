import react from "react";
import Success from "../Component/Services/Success";
import heroImg from '../assets/heroImg.png'
import Bashert from '../Component/Bashert'

const Succes = () => {
    return (
        <>
          <img src={heroImg} className='w-full' alt="" />
          <Bashert/>
          <Success/>
        </>

    )
}

export default Succes