import React from 'react'
import { RiFacebookLine, RiInstagramLine, RiMailLine, RiTwitterXLine, RiWhatsappLine } from 'react-icons/ri'
import logo from '../assets/images/logo.jpeg'
import { navlinks } from './navlinks'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='bg-white text-black '>
      <div className='md:flex py-5 mx-5'>
        <div className='md:w-[20%] my-5'>
          <img className='w-16 mb-1 mx-auto' src={logo}/>
          <div className='text-center'>
            Zatn.
          </div>
        </div>
        <div className='md:w-[80%] grid md:grid-cols-4 text-center gap-10'>
          <div>
            <div className='text-3xl mb-3'>REACH US</div>
            <div className='list-disc'>
              <li>Zatn.</li>
              <li>9597811944</li>
              <li>zatn.business@gmail.com</li>
            </div>
          </div>
          <div>
            <div className='text-3xl mb-3'>ADDRESS</div>
            <div>
              No 129 A pemmasani avenue, Jothi Nagar, Arakkonam
            </div>
          </div>
          <div>
            <div className='text-3xl '>WORKING HOURS</div>
            <div>
              <li>9 AM - 9 PM</li>
              <li>Monday - Saturday</li>
            </div>
          </div>
          <div>
            <div className='text-3xl mb-3'>QUICK LINKS</div>
            <div className='flex flex-col list-disc'>
              {navlinks.map(x=>(
                x.quickLink &&
              
                                          
                                            <li>
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
              
              </li>
                                  ))}

            </div>
          </div>
        </div>
      </div>
        <div className='text-center '>
            <div className='flex py-5 items-center justify-center'>
                <div className='mx-5 text-3xl'><a href='mailto:zatn.business@gmail.com'><RiMailLine/></a></div>
                <div className='mx-5 text-3xl'><a href='https://www.instagram.com/zatn.tech/'><RiInstagramLine/></a></div>
                <div className='mx-5 text-3xl'><a href='https://api.whatsapp.com/send?phone=9597811944'><RiWhatsappLine/></a></div>
            </div>
            <h1 className='py-5'>
            ©2024, Zatn. Technologies. All Rights Reserved.
            </h1>
        </div>
    </div>
  )
}

export default Footer