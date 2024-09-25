import React from 'react'

const Laptop = ({image,link}) => {
  return (
    <a href={link} target='_blank'>
        
    <div className={'border-[0.2px] shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white w-[350px] h-[200px] md:w-[700px] sm:h-[250px] sm:w-[360px] md:h-[395px] rounded-xl bg-cover md:bg-contain'}   style={{backgroundImage: `url(${image})`}}>

    </div>
    </a>
  )
}

export default Laptop