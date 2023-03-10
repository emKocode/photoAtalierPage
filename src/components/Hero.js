import React from 'react';


import {hero} from '../data';
import Stats from '../components/Stats';

const Hero = () => {

  const {title,subtitle,buttonText} = hero;

  return <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat 
  pb-[254px] relative  lg:bg-center text-white pt-[225px] '>
    <div className='container mx-auto text-center'>
      <h1 className='text-xl mx-auto font-semibold mb-[30px] lg:text-[50px]
       lg:leading-tight lg:max-w-[888px]'>{title}</h1>
       <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>{subtitle}</h2>
       <p className='  lg:px-[80px] lg:mb-[194px] lg:py-[16px] transition-all opacity-80  px-[35px] py-[9px] mb-[160px] text-xl rounded-md opacity:0'></p>
       <div>
        <Stats />
       </div>
    </div>
  </section>;
};

export default Hero;
