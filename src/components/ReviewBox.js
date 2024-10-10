import React from 'react'
import { Rating,Heart } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import i2 from '../assets/images/background.jpg'

const myStyles = {
    itemShapes: Heart,
    activeFillColor: '#ffc60a',
    inactiveFillColor: 'black'
  }

const ReviewBox = ({name,content,rating}) => {
    
  return (
    <div className='md:-skew-x-12  md:h-96 md:w-[700px] lg:w-[1000px] text-black  shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]' style={{backgroundImage:`url(${i2})`}}>
        <div className='flex flex-col md:flex-row'>
            <div className='w-[40%]'>
                
            </div>
            <div className='w-[60%] mx-10 flex flex-col '>
                <div className='my-10 text-xl'>{name}</div>
                <div className='text-justify'>{content}</div>
                <div className='mt-16'><Rating style={{ maxWidth: 200 }} readOnly value={rating} itemStyles={myStyles} /></div>
            </div>
        </div>
    </div>
  )
}

export default ReviewBox