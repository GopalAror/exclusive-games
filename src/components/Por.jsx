import React from 'react'
import Designbtn from './Designbtn'
import porimg from "../assets/images/por-img.webp";

const Por = () => {
    return (
        <div>
            <div className="max-w-[1140px] mx-auto px-3 pt-[120px] md:pt-[250px] pb-[150px] md:pb-[220px]" id="por">
                <div className="flex flex-row flex-wrap -mx-3 items-center">
                    <div className=" w-full md:w-6/12 px-3 max-md:flex flex-col items-center">
                        <h2 className='text-[#00141B] font-Anton text-[48px] font-normal leading-[57px]'>Por qué elegirnos</h2>
                        <p className=' max-w-[526px] text-[#00141b] pt-4 pb-6 opacity-80 font-Inter font-medium leading-[25px] text-[16px]'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                        <Designbtn design="Aprende más" />
                    </div>
                    <div className=" w-full md:w-6/12 px-3 max-md:pt-6 max-md:pb-[140px] flex items-center justify-center">
                        <img className='w-full max-w-[558px] rounded-[16px]' src={porimg} alt="porimg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Por