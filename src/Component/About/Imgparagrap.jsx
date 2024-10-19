import React from "react";
import About1 from '../../assets/allfiles/About1.jpg'
import About2 from '../../assets/allfiles/About2.jpg'

const Imgparagrap = () => {
  return (
    <>
     <div className="flex gap-8 w-[80vw] ml-6 mt-10 items-center ">
      <div className="h-24 w-52 rounded-full bg-cover"
        style={{ backgroundImage: `url(${About1})` }}></div>
    
      <p>Matchmaker was started with the simple goal of helping Jewish singles find their soul mates, their bashert. The Midrashim teach that every Jewish soul stood at Sinai with his or her soul mate, bashert, at the giving of the Torah. Now the challenge is finding the soul mate, the bashert, that you saw at Sinai.</p>
     </div>
     <div className="flex flex-row-reverse gap-8 mx-6 mt-10 items-center">
      <div className="h-36 w-96 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${About2})` }}></div>
  
      <p>Matchmaker  combines the power of technology, the accessibility of the internet and the personal touch of a Jewish matchmaker to make matches that meet your unique personality and needs. Our experienced Jewish Matchmakers are from diverse backgrounds, and focus on different age groups, religious levels, locations and personalities. Throughout the world, our matchmakers work with Jewish singles who consider themselves "Just Jewish", </p>
     </div>
    </>
  );
};

export default Imgparagrap;
