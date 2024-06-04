import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { HeroSec } from '../../components/HeroSec/HeroSec'
import { Features } from '../../components/Features/Features'
import { CTA } from '../../components/CTA/CTA'
import { ProblemSolved } from '../../components/ProblemSolved/ProlemSolved'


export const Home = () => {
  return (
    <>
      <div className=' bg-[url("https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d7eb5ea3efb_home-hero-bg.svg")] bg-center bg-cover pb-48  bg-no-repeat '>
        <Navbar />
        <HeroSec />
      </div>

      <Features/>
<ProblemSolved/>

      <CTA/>






      <div className='h-screen bg-white'>Home</div>
      <div className='h-screen'>Home</div>
      <div className='h-screen'>Home</div>

    </>
  )
}
