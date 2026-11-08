import React from 'react';

const Hero = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
        <div className='w-full px-4 pt-12 text-center md:text-left'>
            <h2 className='font-bold text-3xl md:text-6xl'>Build Your Ideal <br />
            <span className='bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#9C27B0] bg-clip-text text-transparent'>Development Stack</span></h2>
            

         <p className=' mx-auto mt-5 w-full max-w-[350px] text-center text-sm leading-[23px] text-[#4B5563] md:mx-0 md:max-w-[576px] md:text-left text-2xl leading-[38px]'>
    Explore frontend, backend, database, and tooling options,
    <br className='hidden md:block' />
    compare them side by side, and put together the stack that fits your
    <br className='hidden md:block' />
    next project.
   </p>
      <div className='mt-7 flex flex-row gap-[12px] '>
      <button className=' shrink-0 whitespace-nowrap  bg-gradient-to-r from-[#FF5722] via-[#E91E63] to-[#9C27B0]
       text-white  text-sm   w-[168px] h-[40px] rounded-[8px] ' >Explore Technologies</button> 
      <button className=' shrink-0 whitespace-nowrap border border-[#374151] h-[42px] w-[170px] text-[#374151] rounded-[8px]'>Learn More</button> 
      </div>
</div>
<div className='w-full '>
{/*  mx-auto  w-full max-w-[327px] h-auto object-contain  md:max-w-[450px]  */}

    <img src="banner-stack.png" alt=""  className='
    w-[327px] h-[299px] mx-auto md:w-[350px] md:h-[320px]
     '/>
</div>
     </div>


      
    );
};

export default Hero;