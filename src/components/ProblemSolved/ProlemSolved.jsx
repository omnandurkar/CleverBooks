import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProblemSolved = () => {


  // useGSAP(() => {

  //   gsap.to('#stats1 h1', {

  //     y:"-200%",
  //     scrollTrigger: {
  //       trigger: '#stats1',
  //       scroller: "body",
  //       start: "top 50%",
  //       end: "top -100%",
  //       scrub: 2,
  //       pin: true
  //     }
  //   })

  //   ScrollTrigger.refresh();

  // }, []);

  return (
    <>
      <div className=' flex flex-col justify-center space-y-10 items-center py-28   bg-[#151218]'>

        {/* <div>
          <h1 className='item1 '>STOCKOUTS

          </h1>
          <h1 className='item2'> CASH RECOVERY CYCLE

          </h1>
          <h1 className='item3'>REVENUE

          </h1>



        </div> */}

        <div id='stats1' className=" h-screen   flex flex-col space-y-10 text-center justify-center items-center">
          <h1 className='text-9xl font-extrabold  ' data-aos="fade-up"  data-aos-delay="500" >
            <span className=' bg-gradient-to-br  from-fuchsia-400 via-indigo-400 to-red-400 bg-clip-text text-transparent'>85</span>
            <span className='text-4xl'>%</span>
          </h1>
          <p className='text-3xl font-bold' data-aos="fade-up"  data-aos-delay="500">Reduction in out-of-stock</p>


        </div>
        <div id='stats2' className=" h-screen stats2 flex flex-col space-y-10 text-center justify-center items-center">
          <h1 className='text-9xl font-extrabold 'data-aos="fade-up"  data-aos-delay="500">
            <span className=' bg-gradient-to-br  from-fuchsia-400 via-indigo-400 to-red-400 bg-clip-text text-transparent'>25</span>
            <span className='text-4xl'>Days</span>
          </h1>
          <p className='text-3xl font-bold' data-aos="fade-up"  data-aos-delay="500">Reduction in cash recovery time</p>


        </div>
        <div id='stats3' className=" h-screen stats3 flex flex-col space-y-10 text-center justify-center items-center">
          <h1 className='text-9xl font-extrabold 'data-aos="fade-up"  data-aos-delay="500">
            <span className=' bg-gradient-to-br  from-fuchsia-400 via-indigo-400 to-red-400 bg-clip-text text-transparent'>15</span>
            <span className='text-4xl'>Days</span>
          </h1>
          <p className='text-3xl font-bold'data-aos="fade-up"  data-aos-delay="500">Growth in revenue</p>


        </div>

      </div>
      {/* <img className='h-[150%]' src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3e24ea3f00_homengg.svg'></img> */}
    </>
  )
}
