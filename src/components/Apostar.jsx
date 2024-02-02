import React from 'react'
import img1 from "../assets/images/apostar-img1.webp";
import img2 from "../assets/images/apostar-img2.webp";
import img3 from "../assets/images/apostar-img3.webp";
import ApostarMap from './ApostarMap';

const Apostar = () => {
    const winner = [
        {
            id: 1,
            Image: img1,
        },
        {
            id: 2,
            Image: img2,
        },
        {
            id: 3,
            Image: img3,
        },
    ]
    return (
        <div>
            <div className="max-w-[1140px] mx-auto px-3 pb-0 pt-[80px] md:py-[120px] flex flex-col items-center">
                <h2 className='text-white font-Anton font-normal text-[48px] leading-[57px] text-center  pb-5 sm:pb-[60px]'>Ellos eligieron apostar con nosotros</h2>
                <div className="flex flex-wrap flex-row -mx-3 pb-[35px]">
                    {winner.map((i) => <ApostarMap key={i.id} img={i.Image} />)}
                </div>
                <p className='max-w-[883px] text-white font-Inter font-semibold text-center'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                    Ahora, la próxima apuesta está en tus manos.
                    Elige ganar. Elige exclusive game.</p>
            </div>
        </div>
    )
}
export default Apostar