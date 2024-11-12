import React from 'react'
import { RiFacebookLine, RiInstagramLine, RiMailLine, RiTwitterXLine, RiWhatsappLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='bg-white text-black '>
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