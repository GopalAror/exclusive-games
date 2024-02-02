import React from 'react'
import Simplebtn from './Simplebtn'

const SlotMap = (props) => {
    return (
        <div className='sm:w-4/12 w-6/12 px-3 pt-6'>
            <div className='relative overflow-hidden group rounded-[8px]'>
                <img className='w-full  relative z-0' src={props.img} alt="images" />
                <div className='bg-[#000000a3] border-2 border-transparent group-hover:border-[#6CE6A1] absolute w-full min-h-[265px] z-[2] h-full flex justify-center group-hover:opacity-100 opacity-0 scale-0 group-hover:scale-100 duration-500 items-center top-0'>
                    <Simplebtn simple="Jugar" />
                </div>
            </div>
        </div>
    )
}
export default SlotMap