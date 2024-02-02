import React from 'react'
import img1 from "../assets/images/atributes-img1.webp";
import img2 from "../assets/images/atributes-img2.webp";
import img3 from "../assets/images/atributes-img3.webp";
import up from "../assets/images/up-errow.svg";
import down from "../assets/images/down-errow.svg";
import AtributesStructur from './AtributesStructur';
import bottom from "../assets/images/bottom-ellepis.webp";

const Atributos = () => {
    const item = [
        {
            id: 1,
            Images: img1,
            feature: "Inteligencia",
            work: "Comprendemos a la perfección los gustos de las personas y el mundo del gaming.",
        },
        {
            id: 2,
            Images: img2,
            feature: "Proactividad",
            work: "Somos creadores de cambios que exploran nuevas formas de entretenimiento.",
        },
        {
            id: 3,
            Images: img3,
            feature: "Innovación",
            work: "Pensamos fuera de la caja para estar siempre un paso adelante.",
        },
    ]
    return (
        <div className='relative overflow-hidden'>
            <img className='max-w-[162px] w-full min-h-[273px] absolute top-0 right-0' src={bottom} alt="bottom" />
            <div className="max-w-[1140px] mx-auto px-3">
                <h2 className='text-[#00141B] pb-[20px] sm:pb-[60px] font-Anton font-normal text-[48px] leading-[57px] text-center'>Nuestros Atributos de Marca</h2>
                <div className="flex flex-wrap items-center justify-center flex-row -mx-3 relative z-[2] min-[500px]:justify-between">
                    <img className='absolute left-[32%] md:left-[25%] lg:left-[21%] max-w-[160px] min-[500px]:block hidden min-[580px]:max-w-[200px] top-[10%] md:top-[9%] lg:top-[7%] md:max-w-[150px] sm:max-w-[250px] lg:max-w-[223px] w-full' src={up} alt="up-errow" />
                    <img className='absolute md:right-[24%] lg:right-[23%] md:max-w-[150px] lg:max-w-[223px] sm:max-w-[250px] sm:right-[10%] w-full sm:bottom-[20%] md:block hidden md:top-[33%]' src={down} alt="down-arrow" />
                    <img className='hidden md:hidden absolute bottom-[20%] min-[580px]:h-[40px] h-[30px] min-[500px]:block rotate-[140deg] right-[14%]' src={up} alt="up" />
                    {item.map((p) => <AtributesStructur key={p.id} img={p.Images} naming={p.feature} functioning={p.work} />)}
                </div>
            </div>
        </div>
    )
}

export default Atributos
