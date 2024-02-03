import React from 'react'
import poker from "../assets/images/poker-img.webp";
import aviator from "../assets/images/aviator-img.webp";
import big from "../assets/images/Ellipse-big.webp";
import short from "../assets/images/short-img.webp";

const Misson = () => {
    return (
        <div className='overflow-hidden relative' id="mision">
            <img className=' absolute top-0 left-0 min-h-[484px] max-w-[175px] w-full z-0' src={big} alt="big" />
            <img className=' absolute top-[46%] left-[44%] max-w-[170px] w-full min-h-[170px]' src={short} alt="short" />
            <div className="max-w-[1140px] mx-auto px-3 md:pt-[74px] md:pb-[100px]">
                <div className="flex flex-wrap flex-row -mx-3 relative z-[2]">
                    <div className="md:w-6/12 w-full px-3">
                        <img className='w-full max-w-[538px] h-[250px] sm:h-[536px]' data-aos="fade-right" src={poker} alt="poker" />
                        <h2 className=' text-white font-Anton md:text-[48px] leading-[35px] sm:text-[35px] text-[28px] md:leading-[57px] font-normal pt-5 md:pt-[60px]' data-aos="fade-right">Nuestra Visión</h2>
                        <p className='text-white max-w-[444px] opacity-80 font-Inter text-[13px] sm:text-[16px] font-medium pb-[24px] pt-[16px]' data-aos="fade-right">Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                        <a href="#" className='text-[#7AF57A] max-md:pb-7 inline-block font-Inter font-bold text-[16px] leading-[25px]' data-aos="fade-right">Aprende más --{">"}</a>
                    </div>
                    <div className="md:w-6/12 w-full px-3">
                        <img className='w-full max-w-[538px] h-[250px] sm:h-[536px] md:hidden block' src={aviator} alt="aviator" data-aos="fade-left" />
                        <h2 className=' text-white font-Anton md:text-[48px] leading-[35px] sm:text-[35px] text-[28px] md:leading-[57px] font-normal max-md:pt-5' data-aos="fade-left" >Nuestra Misión</h2>
                        <p className='text-white max-w-[444px] opacity-80 font-Inter text-[13px] sm:text-[16px] font-medium pb-[24px] pt-[16px]' data-aos="fade-left">Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                        <a href="#" className='text-[#7AF57A] font-Inter font-bold text-[16px] leading-[25px] inline-block pb-[50px] sm:pb-[60px]' data-aos="fade-left">Aprende más --{">"}</a>
                        <img className='w-full md:block hidden max-w-[538px] min-h-[536px]' src={aviator} alt="aviator" data-aos="fade-left" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Misson