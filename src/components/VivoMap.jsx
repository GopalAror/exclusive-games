import React from 'react'
import Simplebtn from './Simplebtn'

const VivoMap = (props) => {
  return (
    <div className='md:w-4/12 w-6/12 pt-5 px-3'>
      <div className='relative overflow-hidden group rounded-[8px] duration-500 hover:shadow-[5px_10px_10px_black]'>
        <img className='w-full relative z-0' src={props.img} alt="images" />
        <div className='bg-[#000000a3] absolute w-full z-[2] h-full flex justify-center group-hover:opacity-100 opacity-0 scale-0 group-hover:scale-100 duration-500 items-center top-0'>
          <Simplebtn simple="Reproducir ahora" />
        </div>
      </div>
    </div>
  )
}

export default VivoMap
