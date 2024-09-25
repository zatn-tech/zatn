import React from 'react'
import i1 from '../assets/images/webdesign.png'

const BoxDisplay = ({ image, topic, content }) => {
    return (
      <div
        className="w-[300px] h-[450px] shadow-[inset_-12px_-8px_40px_#46464620]"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        }}
      >
        <div className='p-5 capitalize'>
          {topic} 
        </div>
        <div className='p-5 text-justify text-sm'>
          {content}
        </div>
      </div>
    );
  };
  

export default BoxDisplay