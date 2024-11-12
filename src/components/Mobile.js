import React, { useState,useEffect,useRef } from 'react'

const Mobile = ({image,link}) => {

    const [hover,setHover]=useState(false);
    const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHover(true); // Set hover to true when the div appears on screen
        } else {
          setHover(false); // Optionally reset hover when the div leaves the screen
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the div is visible
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <a href={link} className='' target='_blank'>

    <div ref={divRef} className={'border-[0.2px] shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-white h-[430px] rounded-3xl w-[200px] bg-contain bg-no-repeat'} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}  style={{backgroundImage: hover ? `url(${image})` : 'none'}} >
        <div className='mt-2 h-4 border-[0.5px] border-white mx-[32%] rounded-full bg-black'></div>
    </div>
    </a>
  )
}

export default Mobile