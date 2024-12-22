import React, { useState } from 'react';
import { Link } from 'react-scroll'

const SlidingButton = ({ link, name, pos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10">
      {/* Sliding Button */}
      <button
        onClick={toggleSlide}
        className={`fixed ${pos} right-0 transform -translate-y-1/2 transition-transform duration-300  ${
          isOpen ? 'translate-x-0' : 'translate-x-[90%]'
        } bg-orange-900 text-white py-2 px-4 rounded-l-lg w-52`}
      >
        <Link onClick={toggleSlide} className='cursor-pointer  ml-10 hover:text-gray-400'
                            activeClass="active"
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={10}
                            duration={3000}
                        // onSetActive={handleSetActive}
                        >
                            {name}
                        </Link>
        
      </button>
    </div>
  );
};

export default SlidingButton;
