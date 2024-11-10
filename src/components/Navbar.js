import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className='py-[2%] text-white bg-black text-xl'>
            <div className='hidden md:flex justify-around'>
                <div>
                    Zatn.
                </div>
                <div className='flex justify-around '>
                    <div className='px-5'>
                    <Link
                        activeClass="active"
                        to="whatwedo"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={3000}
                    // onSetActive={handleSetActive}
                    >

                        What We Do
                    </Link>
                    </div>
                    <div className='px-5'>
                    <Link
                        activeClass="active"
                        to="whoweare"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={3000}
                    >
                       Who We Are
                    </Link>
                    </div>
                    <div className='px-5'>
                    <Link
                        activeClass="active"
                        to="whatwethink"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={3000}
                    >
                        Why Choose Us
                    </Link>
                    </div>
                </div>
                <div>
                    <Link
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
        </div>
    )
}

export default Navbar