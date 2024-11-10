import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='bg-gray-500 py-16'>
        <div className='text-center [word-spacing:20px] text-black text-5xl mb-16 px-16 tracking-tighter leading-snug'>
                    ELEVATE YOUR BUSINESS WITH US
                    <div className='border-2 border-black w-[20%] ml-[21%] leading-tight'></div>
                </div>
        <div>
            <div className='text-center '>
                <div className='my-8'><input placeholder='Your Name' className='bg-black md:w-96 md:h-10 w-72 text-center'></input></div>
                <div className='my-8'><input placeholder='Your Email' className='bg-black md:w-96 md:h-10 w-72 text-center'></input></div>
                <div className='my-8'><input placeholder='Your Phone Number' className='bg-black md:w-96 md:h-10 w-72 text-center'></input></div>
                <div className='my-8'><textarea  placeholder='Description' className='bg-black md:w-96 md:h-20 w-72 h-16  text-center'></textarea></div>
                <button className='bg-black px-4 py-2'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contact