import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { HeroSec } from '../../components/HeroSec/HeroSec'
import { Features } from '../../components/Features/Features'
import { CTA } from '../../components/CTA/CTA'
import { ProblemSolved } from '../../components/ProblemSolved/ProlemSolved'
import Problems from '../../components/Problems/Problems'
import { Carouselee } from '../../components/Carousel/Carousel'
import { Footer } from '../../components/Footer/Footer'
import { Review } from '../../components/Review/Review'
import { Marqueee } from '../../components/Marqueee'
import Aos from 'aos';
import 'aos/dist/aos.css'




export const Home = () => {


  useEffect(() => {
    Aos.init({ duration: 1000, delay: 300 });
  })

  return (
    <>
      <div id='top-nav' className='  bg-[url("https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d7eb5ea3efb_home-hero-bg.svg")] bg-center bg-cover pb-48  bg-no-repeat '>
        <Navbar />
        <HeroSec />
      </div>

      <Features />
      <ProblemSolved />
      <Marqueee />
      <Review />

      <Problems />
      <div className="car">
        {/* <Carouselee /> */}
      </div>



      <CTA />





      <Footer />

    </>
  )
}
