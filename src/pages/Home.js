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
import { review } from '../components/review';
import AutoSlider from '../components/AutoSlider'
import Services from '../components/Services';
import { FiInstagram } from 'react-icons/fi';
import { instaprofiles } from '../components/insta';
import { whychooseus } from '../components/whychooseus';
import bg from '../assets/images/home-bg.jpg';
import logo from '../assets/images/logo.jpeg'



const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLetterLoading, setLetterLoading] = useState(true)

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % review.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [review.length]);


    return (
        <section className='bg-black  text-white '>
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="h-screen"
            >


                <div>
                    <Navbar />
                </div>
                <div id='home' className='text-7xl md:text-9xl justify-around mt-[10%]'>
                    <div className='md:mx-10'>
                        <h1 className='drop-shadow-[5px_5px_black] '>Zatn thrives on your success</h1>
                    </div>
                    <div className={`md:ml-[50%] text-lg `}>

                        <div className='p-5 text-justify'>

                            <div className='border-t-8 border-white w-16 mb-10'></div>
                            <p className='mr-10'>
                                If you’re looking to create an exceptional online presence, you’ve come to the right team. We are a passionate group of skilled professionals committed to transforming your vision into reality and elevating your business to new heights.
                            </p>
                            {/* <button className='border-[0.5px] border-white py-2 px-4  mt-5 after:z-[-1px] after:right-[-10%]'>See more</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div id='whatwedo' className='hide-scroll-bar flex py-16 overflow-y-scroll'>
                {whatwedo.map((x) => (
                    <div className='mx-[3%]'>
                        <BoxDisplay key={x.topic} image={x.image} topic={x.topic} content={x.content} />
                    </div>
                ))}
            </div>
            <div id='whoweare' className='mx-auto flex flex-col items-center'>
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
                                {x.maintenance && x.developed ? (
                                    <div className='text-center my-5'>
                                        DEVELOPED AND MAINTAINED BY ZATN
                                    </div>
                                ) : x.maintenance ? (
                                    <div className='text-center my-5'>
                                        MAINTAINED BY ZATN
                                    </div>
                                ) : x.developed ? (
                                    <div className='text-center my-5'>
                                        DEVELOPED BY ZATN
                                    </div>
                                ) : null}
                            </div>
                            {/* <div className='flex items-center justify-center text-2xl my-5 md:[word-spacing:10px]'><div className='mx-3'><a href={x.link} target="_blank" className=''>{x.topic}</a></div><div className='text-lg'><CiShare1 /></div></div> */}
                        </div>
                    ))}
                </div>
                <div className='my-10'>
                    <p className='text-3xl mx-5 text-justify md:text-5xl'>We create content and edit videos for the following accounts</p>
                </div>
                <div className='flex flex-col md:flex-row '>
                    {instaprofiles.map(i1 => (

                        <div className='mx-5'>
                            <div className=''>
                                <img className='h-32 w-96 rounded-3xl' src={i1.image} />
                            </div>
                            <div className='flex justify-center cursor-pointer my-5'>
                                <div className='my-1 mx-3'><FiInstagram /></div>
                                <div className=''><a target='_blank' href={i1.link}>{i1.name}</a></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div id='whychooseus' className='bg-white text-black mx-auto flex flex-col items-center mt-[5%] pt-16 mb-[10%]'>
                <div className='text-center [word-spacing:20px] text-6xl md:text-8xl mx-16 tracking-tighter leading-snug'>
                    WHY CHOOSE US
                    <div className='border-2 border-white w-[50%] leading-tight'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mx-16 my-16'>
                    {whychooseus.map(m1 => (
                        <div className='mx-5 my-5 md:my-0'>
                            <div className='text-5xl mb-5'>
                                {m1.name}
                            </div>
                            <div className='text-justify ml-5'>
                                {m1.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id='' className='mx-auto flex flex-col items-center mb-16'>
                <div className='text-center [word-spacing:20px] text-6xl md:text-8xl mx-16 tracking-tighter leading-snug'>
                    WHAT OUR CLIENTS SAY
                    <div className='border-2 border-white w-[50%] leading-tight'></div>
                </div>
                <div className='mt-10'>

                    <AutoSlider reviews={review} />

                </div>
            </div>
            <div className='mt-16'>
                <Contact />
            </div>
            <div className=''>
                {/* <Services /> */}
            </div>
            <div>
                <Footer />
            </div>

        </section>
    )
}

export default Home