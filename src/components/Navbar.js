import React from 'react'
import { Link } from 'react-scroll'
import SlidingButton from './SlidingButton'
import { navlinks } from './navlinks'

const Navbar = () => {
    return (
        <div className='py-[2%] text-white text-xl'>
            <div className='flex justify-around'>
                <div>
                    Zatn.
                </div>
                <div className='hidden md:flex justify-around '>
                    {navlinks.map(x=>(
                        x.forLap &&

                            <div className='px-5'>
                            <Link className='cursor-pointer hover:text-gray-400'
                            activeClass="active"
                            to={x.link}
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={3000}
                            // onSetActive={handleSetActive}
                            >
                            
                            {x.name}
                            </Link>
                            </div>
                        

                    ))}
                </div>
                <div className='hidden md:flex'>
                    <Link className='cursor-pointer hover:text-gray-400'
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={3000}
                    // onSetActive={handleSetActive}
                    >

                        Contact Us
                    </Link>
                </div>
            </div>
            <div className='md:hidden'>
                {navlinks.map((x,index)=>(
                    <div className=''>
                    <SlidingButton link={x.link} name={x.name} pos={x.pos}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar