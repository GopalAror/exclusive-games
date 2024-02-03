import React from 'react'
import jackport from "../assets/images/jackport.webp";
import double from "../assets/images/double-tick.svg";
import jack from "../assets/images/jackport-ellipis.svg";
import img1 from "../assets/images/vivo-img1.webp";
import img2 from "../assets/images/vivo-img2.webp";
import img3 from "../assets/images/vivo-img3.webp";
import vivoellipis from "../assets/images/vivo-ellips.webp";
import VivoMap from './VivoMap';

const Jackport = () => {
    const vivo = [
        {
            id: 1,
            Image: img1,
            animate: "fade-down-right"
        },
        {
            id: 2,
            Image: img2,
            animate: "fade-down",
        },
        {
            id: 3,
            Image: img3,
            animate: "fade-down-left"
        },
    ]
    return (
        <div className='relative overflow-x-clip'>
            <div className="max-w-[1140px] mx-auto px-3 pt-[50px] md:pt-[90px]">
                <div className="flex flex-wrap flex-row -mx-3 relative">
                    <img className='absolute bottom-[0] right-[25%]' src={jack} alt="ellips" />
                    <div className=" w-full lg:w-6/12 px-3 relative z-[2]">
                        <img className='w-full max-w-[538px]' data-aos="fade-right" src={jackport} alt="jackport" />
                    </div>
                    <div className=" w-full lg:w-6/12 px-3 pl-[10px] relative z-[2]">
                        <h2 className='text-white pt-[30px] font-Anton sm:text-[35px] text-[28px] md:text-[48px] font-normal leading-[35px] md:leading-[57px]' data-aos="fade-left">Potenciando sus elecciones</h2>
                        <p className='text-white font-Inter pt-4 pb-6 font-medium text-[14px] sm:text-[16px] leading-[25px] opacity-80' data-aos="fade-left">Con Exclusive Game lo mejor está de tu lado.</p>
                        <div className="flex gap-2 pb-3" data-aos="fade-left">
                            <img src={double} alt="double" />
                            <p className='text-white font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] opacity-80'>Tecnología HTML5</p>
                        </div>
                        <div className="flex gap-2 pb-3" data-aos="fade-left">
                            <img src={double} alt="double" />
                            <p className='text-white font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] opacity-80'>Versión PC y móvil</p>
                        </div>
                        <div className="flex gap-2 pb-3" data-aos="fade-left">
                            <img src={double} alt="double" />
                            <p className='text-white font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] opacity-80'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className="flex gap-2 pb-3 items-start" data-aos="fade-left">
                            <img src={double} alt="double" />
                            <p className='text-white font-Inter font-medium text-[12px] sm:text-[16px] max-w-[383px] leading-[25px] opacity-80'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                        </div>
                        <div className="flex gap-2 pb-3" data-aos="fade-left">
                            <img src={double} alt="double" />
                            <p className='text-white font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] opacity-80'>Aplicación para android y windows de regalo.</p>
                        </div>
                        <p className='pt-6 text-white font-Inter font-medium text-[12px] sm:text-[16px] leading-[25px] opacity-80' data-aos="fade-left">Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                    </div>
                </div>
                <div className='py-[40px] sm:py-[100px] md:py-[150px]' data-aos="flip-down">
                    <div className=" bg-[url(./assets/images/lanza-bg.webp)] mx-auto bg-no-repeat max-w-[1043px] flex items-center justify-center min-h-[200px] px-5 sm:min-h-[308px] w-full bg-100">
                        <h3 className='text-white pt-[30px] font-Anton sm:text-[35px] text-[28px] md:text-[48px] font-normal leading-[35px] md:leading-[57px] text-center max-w-[520px]'>lanza tu propia plataforma en sólo 2 semanas</h3>
                    </div>
                </div>
                <div className='relative z-[2] mb-[30px] md:pb-[100px]'>
                    <h2 className='text-white pt-[30px] pb-[20px] sm:pb-[60px] font-Anton sm:text-[35px] text-[28px] md:text-[48px] font-normal leading-[35px] md:leading-[57px] text-center'>Juegos en vivo</h2>
                    <div className="flex flex-row flex-wrap -mx-3 pb-[50px]">
                        {vivo.map((r) => <VivoMap key={r.id} animate={r.animate} img={r.Image} />)}
                    </div>
                </div>
            </div>
            <img className='absolute bottom-[-10%] max-w-[174px] min-h-[484px] w-full z-[0] right-0' src={vivoellipis} alt="ellipis" />
        </div>
    ) 
}

export default Jackport