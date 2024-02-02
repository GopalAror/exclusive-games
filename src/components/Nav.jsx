import React, { useState } from 'react'
import logo from "../assets/images/logo.webp";
import Simplebtn from './Simplebtn';
const Nav = () => {
  const [nav, setnav] = useState(false)
  function view() {
    setnav(!nav)
    document.body.classList.toggle("max-lg:overflow-hidden")
  }
  return (
    <nav className='bg-[rgba(255,255,255,0.10)] backdrop-blur-[26px] relative z-[2]'>
      <div className="max-w-[1140px] mx-auto px-3 flex items-center justify-between sm:min-h-[90px] min-h-[70px]">
        <div className="flex items-center lg:gap-[101px]">
          <div className="flex">
            <img className='cursor-pointer w-full max-w-[210px] h-[43px]' src={logo} alt="logo" />
          </div>
          <ul className={`flex items-center gap-[28px] max-lg:fixed max-lg:top-0 max-lg:justify-center max-lg:w-full max-lg:h-screen max-lg:bg-black max-lg:flex-col max-lg:z-[3] duration-700 ${nav ? "left-0" : "left-[-100%]"}`}>
            <li><a className='text-white font-Inter text-[16px] font-medium leading-[25px] opacity-80 hover:opacity-100 duration-500' href="#">Hogar</a></li>
            <li><a className='text-white font-Inter text-[16px] font-medium leading-[25px] opacity-80 hover:opacity-100 duration-500' href="#">Misión</a></li>
            <li><a className='text-white font-Inter text-[16px] font-medium leading-[25px] opacity-80 hover:opacity-100 duration-500' href="#">Tragamonedas</a></li>
            <li><a className='text-white font-Inter text-[16px] font-medium leading-[25px] opacity-80 hover:opacity-100 duration-500' href="#">Por qué elegirnos</a></li>
            <li><a className='text-white font-Inter text-[16px] font-medium leading-[25px] opacity-80 hover:opacity-100 duration-500' href="#">Ofertas</a></li>
            <div className='min-[500px]:hidden flex'>
              <Simplebtn simple="Acceso" />
            </div>
          </ul>
        </div>
        <div className='flex items-center gap-5'>
          <div className='min-[500px]:flex hidden'>
            <Simplebtn simple="Acceso" />
          </div>
          {nav ? (<label className='flex flex-col relative z-[4]' onClick={view}>
            <span className='bg-white rounded-lg h-[4px] w-[40px] rotate-45 duration-300'></span>
            <span className='bg-white rounded-lg h-[4px] w-[40px] absolute top-0 duration-300 -rotate-45'></span>
          </label>) : (<label className='flex-col max-lg:flex hidden relative z-[4]' onClick={view}>
            <span className='bg-white mt-2 rounded-lg h-[4px] w-[40px] duration-300'></span>
            <span className='bg-white mt-2 rounded-lg h-[4px] w-[40px] duration-300'></span>
            <span className='bg-white mt-2 rounded-lg h-[4px] w-[40px] duration-300'></span>
          </label>)}
        </div>
      </div>
    </nav>
  )
}

export default Nav
