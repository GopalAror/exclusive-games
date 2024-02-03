import React from 'react'
import img1 from "../assets/images/slot-img1.webp";
import img2 from "../assets/images/slot-img2.webp";
import img3 from "../assets/images/slot-img3.webp";
import img4 from "../assets/images/slot-img4.webp";
import img5 from "../assets/images/slot-img5.webp";
import img6 from "../assets/images/slot-img6.webp";
import slot from "../assets/images/slot-ellipis.svg";
import SlotMap from './SlotMap';
import Designbtn from './Designbtn';

const Slot = () => {
    const game = [
        {
            id: 1,
            Image: img1,
            data: "fade-up-right",
        },
        {
            id: 2,
            Image: img2,
            data: "fade-down",
        },
        {
            id: 3,
            Image: img3,
            data: "fade-up-left",
        },
        {
            id: 4,
            Image: img4,
            data: "fade-down-right",
        },
        {
            id: 5,
            Image: img5,
            data: "fade-up",
        },
        {
            id: 6,
            Image: img6,
            data: "fade-down-left",
        },
    ]
    return (
        <div className='relative overflow-x-clip'>
            <div className='max-w-[1140px] mx-auto px-3 pt-[50px] sm:pt-[80px] md:pt-[150px] flex flex-col items-center' id="slot">
                <h2 className='text-center sm:text-[35px] text-[28px] md:text-[48px] font-Anton leading-[35px] md:leading-[57px] font-normal text-[#00141B] pb-4' data-aos="fade-left">Slots</h2>
                <p className='text-center text-[13px] sm:text-[16px] leading-[20px] sm:leading-[25px] font-Inter font-medium opacity-80 text-[#00141B] max-w-[904px]' data-aos="fade-right">En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                <div className="flex flex-row flex-wrap -mx-3 pt-[15px] sm:pt-[60px] pb-[40px] relative z-[2]">
                    {game.map((k) => <SlotMap key={k.id} img={k.Image} animate={k.data} />)}
                </div>
                <div className='min-[580px]:mb-[150px] md:mb-0 mb-[50px]'>
                    <Designbtn design="Mostrar más" />
                </div>
                <img className=' absolute left-0 bottom-[-35%] h-[484px] max-w-[302px] w-full' src={slot} alt="slot" />
            </div>
        </div>
    )
}
export default Slot