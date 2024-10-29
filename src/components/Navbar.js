import React from 'react'

const Navbar = () => {
    return (
        <div className='py-[2%] text-white bg-black text-xl'>
            <div className=' flex justify-around'>
                <div>
                    logo
                </div>
                <div className='flex justify-around '>
                    <div className='px-5'>
                        What we do
                    </div>
                    <div className='px-5'>
                        Who we are
                    </div>
                    <div className='px-5'>
                        What we think
                    </div>
                </div>
                <div>
                    Contact
                </div>
            </div>
        </div>
    )
}

export default Navbar