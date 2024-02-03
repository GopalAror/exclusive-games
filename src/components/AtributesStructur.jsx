import React from 'react'

const AtributesStructur = (props) => {
    return (
        <div data-aos={props.animate} className="md:w-4/12 min-[500px]:w-6/12 w-full pt-6 px-3 flex-col max-w-[287px] flex items-center">
            <img className='min-h-[100px] max-w-[100px] w-full' src={props.img} alt="image" />
            <h5 className='text-[#00141B] text-center font-Anton font-normal text-[16px] sm:text-[20px] leading-[26px] pt-[16px] pb-[10px]'>{props.naming}</h5>
            <p className='max-w-[263px] text-center text-[#00141B] font-Inter text-[13px] sm:text-[16px] leading-[20px] sm:leading-[25.6px] font-medium opacity-80'>{props.functioning}</p>
        </div>
    )
}

export default AtributesStructur