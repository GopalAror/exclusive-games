import React from 'react'
import silver from "../assets/images/silver-img.webp";
import double from "../assets/images/double-tick.svg";
import platinum from "../assets/images/platinum-img.webp";
import Simplebtn from './Simplebtn';
import Designbtn from './Designbtn';
const Poker = () => {
    return (
        <div>
            <div className="max-w-[1140px] mx-auto px-3" id="offer">
                <h2 className='text-white font-Anton font-normal text-[48px] leading-[57px] text-center'>Nuestras ofertas</h2>
                <p className='text-white font-Inter pt-4 pb-[60px] font-medium leading-[25px] text-[16px] text-center opacity-80'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                <div className="w-full border-[0.5px] border-white px-5 bg-[#051D23] rounded-[16px]">
                    <div className="flex flex-wrap flex-row -mx-3 pt-[57px] pb-[32px] items-center">
                        <div className="lg:w-7/12 w-full px-3">
                            <img className='w-full' src={silver} alt="silver-img" />
                        </div>
                        <div className="lg:w-5/12 w-full px-3">
                            <h4 className='text-white text-[32px] font-Anton font-normal leading-[41px] max-md:pt-5'>Silver</h4>
                            <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white pt-4 opacity-80'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                            <p className='pt-[32px] font-Anton font-normal text-[48px] leading-[57px] text-white'>$5000</p>
                            <div className="flex pt-4 items-start gap-2">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white opacity-80'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                            </div>
                            <div className="flex pt-3 items-start gap-2">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white opacity-80'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className="flex pt-3 items-start gap-2">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white opacity-80'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                            </div>
                            <div className="flex pt-3 items-start gap-2">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white opacity-80'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                            <div className="flex pt-3 items-start gap-2 pb-[40px]">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white opacity-80'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                            <Simplebtn simple="Comprar ahora" />
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 my-[64px] border-[0.5px] bg-[url(./assets/images/luxury-bg.webp)] bg-100 bg-no-repeat h-full border-white bg-[#051D23] rounded-[16px] py-[45px] flex items-center flex-col">
                    <div className='max-w-[419px]'>
                        <h4 className='text-white text-[32px] font-Anton font-normal leading-[41px] text-center'>Luxury</h4>
                        <p className='font-Inter font-medium text-[16px] leading-[25px] text-white pt-4 text-center opacity-80'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React .</p>
                        <h2 className='text-white font-Anton font-normal text-[48px] leading-[57px] text-center pt-8 pb-4'>$9000</h2>
                        <div className="flex items-start gap-2">
                            <img src={double} alt="double" />
                            <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white  text-center opacity-80'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3">
                            <img src={double} alt="double" />
                            <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center opacity-80'>Control de RTP (controlás qué porcentaje pagar)</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3">
                            <img src={double} alt="double" />
                            <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center opacity-80'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                        </div>
                        <div className="flex items-start gap-2 pt-3">
                            <img src={double} alt="double" />
                            <div className='text-center w-full'>
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center opacity-80'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 pt-3 pb-9">
                            <img src={double} alt="double" />
                            <div className='text-center w-full'>
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center opacity-80'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Designbtn design="Comprar ahora" />
                        </div>
                    </div>
                </div>
                <div className="w-full border-[0.5px] px-[40px] py-[38px] border-white bg-[#051D23] rounded-[16px]">
                    <div className="flex flex-wrap flex-row max-md:flex-col-reverse -mx-3 justify-between items-center">
                        <div className='md:w-5/12 w-full px-3 max-w-[364px]'>
                            <h4 className='text-white text-[32px] font-Anton font-normal leading-[41px] max-md:text-center max-md:pt-5'>Platinum</h4>
                            <p className='font-Inter font-medium text-[16px] leading-[25px] text-white pt-4 opacity-80 max-md:text-center '>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                            <h2 className='text-white font-Anton font-normal text-[48px] leading-[57px] pt-8 pb-4 max-md:text-center '>Consultar precio</h2>
                            <div className="flex items-start gap-2 max-md:text-center max-md:justify-center">
                                <img src={double} alt="double" />
                                <p className=' font-Inter font-medium text-[16px] leading-[25px] text-white text-center pb-[40px] opacity-80'>Personalizable</p>
                            </div>
                            <div className='max-md:flex justify-center'>
                                <Simplebtn simple="Comprar ahora" />
                            </div>
                        </div>
                        <div className="md:w-7/12 w-full px-3">
                            <img className='w-full' src={platinum} alt="platinum" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poker
