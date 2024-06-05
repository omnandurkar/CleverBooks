import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const [state, setState] = useState(false);

    useGSAP(() => {
        // GSAP animation
        const tl = gsap.timeline();

        tl.from(".navbar-item", {
            duration: 1,
            opacity: 0,
            y: -100,
            stagger: 0.2,
            ease: "back.out",
        })
            .from(".navbar-logo", {
                duration: 1.7,
                opacity: 0,
                y: -100,
                stagger: 0.2,
                ease: "bounce.out",
            });
    }, []);

    

   

    const navigation = [
        { title: "Product", path: "/" },
        { title: "Pricing", path: "/" },
        { title: "Industry", path: "/" },
        { title: "Customer Stories", path: "/" },
        { title: "About", path: "/" },
        { title: "Blog", path: "/" },
    ];

    return (
       

        // bg-opacity-90  backdrop-filter backdrop-blur-sm -----------use this to blur the navbar
        <nav className="  fixed top-0 left-0 bg-[#151218] text-white bg-opacity-65  w-full  shadow-lg z-50 " id='navbar'    >
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-1">
                <div className="flex items-center justify-between py-1 md:py-2 md:block">
                    <Link to="/" className='font-hand'>
                        <h1 className='text-3xl  font-semibold navbar-logo'>Clever Books</h1>
                    </Link>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800 navbar-item" onClick={() => setState(!state)}>
                            {state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-evenly items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        <div className=' justify-between items-center space-y-6 md:flex md:space-x-6 md:space-y-0 '>

                        {navigation.map((item, idx) => (
                            <li key={idx} className="  hover:bg-gradient-to-r  hover:from-fuchsia-400 hover:to-indigo-400 font-semibold  hover:bg-clip-text hover:text-transparent  text-slate-200 cursor-pointer navbar-item">
                                <Link to={item.path} className="block">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        </div>
                        

                    </ul>
                </div>

                <div className={`flex items-center justify-between py-3 md:py-3 md:block ${state ? 'block' : 'hidden'}`}>
               
                        <ul className='space-y-3 items-center gap-x-6 md:flex md:space-y-0 navbar-item  '>
                           
                                <li>
                                    <Link to="/" className="block py-2 px-4  text-center  bg-gradient-to-br from-pink-300 to-indigo-300 bg-clip-text text-transparent hover: text-white    active:scale-90 active:shadow-none rounded-full shadow md:inline-block">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="block py-3 px-5 font-medium text-center text-white bg-gradient-to-br from-fuchsia-400 to-indigo-400 hover:from-indigo-200  hover:to-fuchsia-400 hover:text-black  active:scale-90 active:shadow-none rounded-full shadow md:inline-block">
                                        Talk To Us
                                    </Link>
                                </li>
                        
                        </ul>
                </div>

            </div>
        </nav>



    );
};

export default Navbar;