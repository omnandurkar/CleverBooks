import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const ProblemSolved = () => {

  // useGSAP(() => {

  //   gsap.to("classs", {
  //     scrollTrigger: {
  //       trigger: ".1",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: 1,
  //       markers: true
  //     },
  //     y: 100,
  //   })
   


  // }, []);

  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center   bg-[#151218]'>

        <div>
          <h1 className='item1 '>STOCKOUTS

          </h1>
          <h1 className='item2'> CASH RECOVERY CYCLE

          </h1>
          <h1 className='item3'>REVENUE

          </h1>



        </div>

        <div className=" stats1   flex flex-col space-y-10 text-center justify-center items-center">
          <h1 className='text-9xl font-extrabold '>
            <span className=' bg-gradient-to-br  from-fuchsia-400 via-indigo-400 to-red-400 bg-clip-text text-transparent'>85</span>
            <span className='text-4xl'>%</span>
          </h1>
          <p className='text-3xl font-bold'>Reduction in out-of-stock</p>


        </div>
        <div className=" stats2 flex flex-col space-y-10 text-center justify-center items-center">
          <h1 className='text-9xl font-extrabold '>
            <span className=' bg-gradient-to-br  from-fuchsia-400 via-indigo-400 to-red-400 bg-clip-text text-transparent'>25</span>
            <span className='text-4xl'>Days</span>
          </h1>
          <p className='text-3xl font-bold'>Reduction in cash recovery time</p>


        </div>
        <div className=" stats3 flex flex-col space-y-10 text-center justify-center items-center">
          <h1 className='text-9xl font-extrabold '>
            <span className=' bg-gradient-to-br  from-fuchsia-400 via-indigo-400 to-red-400 bg-clip-text text-transparent'>15</span>
            <span className='text-4xl'>Days</span>
          </h1>
          <p className='text-3xl font-bold'>Growth in revenue</p>


        </div>

      </div>
      {/* <img className='h-[150%]' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3e24ea3f00_homengg.svg'></img> */}
    </>
  )
}
