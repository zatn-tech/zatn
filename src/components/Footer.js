import React from 'react'
import { RiFacebookLine, RiInstagramLine, RiTwitterXLine, RiWhatsappLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='bg-white text-black '>
        <div className='text-center '>
            <div className='flex py-5 items-center justify-center'>
                <div className='mx-5 text-3xl'><RiTwitterXLine/></div>
                <div className='mx-5 text-3xl'><RiInstagramLine/></div>
                <div className='mx-5 text-3xl'><RiFacebookLine/></div>
                <div className='mx-5 text-3xl'><RiWhatsappLine/></div>
            </div>
            <h1 className='py-5'>
            ©2024, Zatn. Technologies. All Rights Reserved.
            </h1>
        </div>
    </div>
  )
}

export default Footer