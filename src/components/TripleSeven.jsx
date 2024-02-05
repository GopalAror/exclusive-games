import React from 'react'
import seven from "../assets/images/tripleseven.webp";
import bulb from "../assets/images/bulb-img.webp";
import people from "../assets/images/people-img.webp";
import money from "../assets/images/money-img.webp";
import ellipis2 from "../assets/images/777-ellipis2.svg";

const TripleSeven = () => {
    return (
        <div className='overflow-x-clip'>
            <img className=' absolute right-0' src={ellipis2} alt="ellipis" />
            <div className="max-w-[1140px] relative z-[2] mx-auto px-3 md:pt-[100px] pt-[50px] pb-[45px] sm:pb-[70px] md:pb-[150px]">
                <div className="flex flex-wrap flex-row -mx-3 justify-between">
                    <div className="md:w-6/12 w-full flex flex-col items-center justify-center px-3 md:max-w-[558px]">
                        <img className='w-full h-full' src={seven} alt="seven" data-aos="fade-right" />
                    </div>
                    <div className="md:w-6/12 w-full max-md:flex flex-col items-center justify-center px-3 max-md:pt-7">
                        <h2 className='text-white pb-[30px] sm:pb-[50px] font-Anton font-normal text-[28px] sm:text-[35px] md:text-[48px] leading-[35px] max-sm:text-center md:leading-[57px]' data-aos="fade-left">Más razones para elegirnos</h2>
                        <div className=' bg-people p-[1px] pl-[1px] duration-500 hover:shadow-[0px_5px_10px_#7AF57A] w-full rounded-[16px] max-w-[374px]' data-aos="fade-left">
                            <div className=" pl-[15px] sm:pl-[56px] pr-[20px] bg-[#051D23] py-6 flex items-center gap-[37px] rounded-[16px]">
                                <img className='w-[68px] h-[68px]' src={bulb} alt="bulb" />
                                <p className='max-w-[227px] font-Inter font-medium leading-[25px] text-[14px] sm:text-[16px] text-white'><span className=' font-Anton text-[25px] sm:text-[32px] leading-[41px] font-normal'>200</span> <br /> Páginas creadas</p>
                            </div>
                        </div>
                        <div className='bg-people mt-6 p-[1px] duration-500 hover:shadow-[0px_5px_10px_#7AF57A] pl-[1px] rounded-[16px] w-full max-w-[374px]' data-aos="fade-left">
                            <div className="max-w-[374px] bg-[#051d23] pr-[20px] pl-[15px]  sm:pl-[56px] py-6 flex items-center gap-[37px] rounded-[16px]">
                                <img className='w-[68px] h-[68px]' src={people} alt="people" />
                                <p className='max-w-[227px] font-Inter font-medium leading-[25px] text-[14px] sm:text-[16px] text-white'><span className=' font-Anton text-[25px] sm:text-[32px] leading-[41px] font-normal'>98%</span><br />Clientes Satisfechas</p>
                            </div>
                        </div>
                        <div className='bg-people mt-6 p-[1px] duration-500 hover:shadow-[0px_5px_10px_#7AF57A] pl-[1px] pb-[1px] w-full rounded-[16px] max-w-[374px]' data-aos="fade-left">
                            <div className="max-w-[374px] bg-[#051d23] pr-[20px pl-[15px] sm:pl-[56px] py-6 flex items-center gap-[37px] rounded-[16px]">
                                <img className='w-[68px] h-[68px]' src={money} alt="money" />
                                <p className='max-w-[227px] font-Inter font-medium leading-[25px]  text-[14px]tsm:ext-[16px] text-white'> <span className=' font-Anton text-[25px] sm:text-[32px] leading-[41px] font-normal'>200</span> <br /> Divisas Disponibles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripleSeven
