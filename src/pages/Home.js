import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import BoxDisplay from '../components/BoxDisplay';
import { whatwedo } from '../components/whatwedo';
import { display } from '../components/display';
import Mobile from '../components/Mobile';
import Laptop from '../components/Laptop';
import { CiShare1 } from "react-icons/ci";
import Footer from '../components/Footer';
import ReviewBox from '../components/ReviewBox';
import Contact from '../components/Contact';


const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLetterLoading, setLetterLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust duration as needed
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterLoading(false)
        }, 1500); // Adjust duration as needed
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className='bg-black  text-white '>
            <div>
                <Navbar />
            </div>
            <div className='text-9xl flex flex-col md:flex-row justify-around mt-[10%]'>
                <div className='flex w-[50%] justify-center items-center'>

                </div>
                <div className={`md:w-[30%] text-lg `}>
                    <div className='p-5 text-justify'>
                        <div className='border-t-8 border-white w-16 mb-10'></div>
                        <p>
                            Experience the breadth and depth of the Zoho ecosystem, with the professional services, infrastructure, support, and security that a large business needs. Streamline complex business processes, build strong relationships with your customers, and drive growth at scale.
                        </p>
                        <button className='border-[0.5px] border-white py-2 px-4  mt-5 after:z-[-1px] after:right-[-10%]'>See more</button>
                    </div>
                </div>
            </div>
            <div className='hide-scroll-bar flex py-16 overflow-y-scroll'>
                {whatwedo.map((x) => (
                    <div className='mx-[3%]'>
                        <BoxDisplay key={x.topic} image={x.image} topic={x.topic} content={x.content} />
                    </div>
                ))}
            </div>
            <div className='mx-auto flex flex-col items-center'>
                <div className='text-center [word-spacing:20px] text-6xl md:text-8xl px-16 tracking-tighter leading-snug'>
                    OUR WORKS
                    <div className='border-2 border-white w-[50%] leading-tight'></div>
                </div>
                <div className='mx-auto'>
                    {display.map((x) => (
                        <div className='flex flex-col md:flex-row justify-between my-[10%]'>
                            <div className='mx-auto'>
                                <Mobile image={x.mobile} link={x.link} />
                            </div>
                            <div>
                                <div className='md:mx-16 mx-auto mt-16 md:mt-0 '>
                                    <Laptop image={x.lap} link={x.link} />
                                </div>
                            </div>
                                {/* <div className='flex items-center justify-center text-2xl my-5 md:[word-spacing:10px]'><div className='mx-3'><a href={x.link} target="_blank" className=''>{x.topic}</a></div><div className='text-lg'><CiShare1 /></div></div> */}
                        </div>
                    ))}
                </div>

            </div>
            <div className='mx-auto flex flex-col items-center mb-16'>
                <div className='text-center [word-spacing:20px] text-6xl md:text-8xl mx-16 tracking-tighter leading-snug'>
                    WHAT OUR CLIENTS SAY
                    <div className='border-2 border-white w-[50%] leading-tight'></div>
                </div>
                <div className='mt-10 mx-16'>
                    <ReviewBox />
                </div>
            </div>
            <div className='mt-16'>
                <Contact/>
            </div>
            <div>
                <Footer />
            </div>

        </section>
    )
}

export default Home