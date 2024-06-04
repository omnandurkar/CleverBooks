import React from 'react';

export const HeroSec = () => {
  return (
    <div className=' py-20 md:py-16   '>
      <section className="translate-y-10 md:translate-y-28 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 space-y-10">
            <h1 className="mb-4 text-3xl font-semibold leading-tight md:text-7xl dark:text-white">
              Every order <br /> fulfilled, <span className='bg-gradient-to-br from-pink-300 to-indigo-300 bg-clip-text text-transparent'>on time.</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
              Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
            </p>
            <div className="flex flex-col md:flex-row">
              {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mb-3 md:mb-0 md:mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a> */}


              <>
                <a href="#_" className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-medium transition-all bg-[#151218] border  rounded-full  group">
                  <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-in-out duration-100 transition-all border-white rounded-full"></span>
                  <span className="relative w-full text-left bg-gradient-to-br from-red-400 to-violet-500 bg-clip-text text-transparent transition-colors duration-500 ease-in-out ">Get started with CleverBooks</span>
                </a>
              </>


            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center ">
            <img className='max-w-full h-auto lg:h-[500px] lg:translate-x-28  ' src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
};
