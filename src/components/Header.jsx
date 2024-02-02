import React from 'react'
import Designbtn from './Designbtn'

const Header = () => {
    return (
        <div className="max-w-[1140px] mx-auto px-3 flex flex-col items-center justify-center h-full grow">
            <h1 className=' font-Anton max-w-[505px] sm:text-[50px] text-[30px] text-center md:text-[72px] font-normal sm:leading-[50px] leading-[35px] md:leading-[86px] text-white text-uppercase'>Exclusive Games. Pasión por ganar</h1>
            <p className='max-w-[727px] text-white pt-[16px] pb-[25px] sm:pb-[40px] font-Inter text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[25px] text-center opacity-80'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
            <Designbtn design="Empezar" />
        </div>
    )
}

export default Header
