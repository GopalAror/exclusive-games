import React from 'react'
import Simplebtn from './Simplebtn'

const SlotMap = (props) => {
    return (
        <div data-aos={props.animate} className='sm:w-4/12 w-6/12 px-3 pt-6'>
            <div className='hover:bg-slot group p-[2px] rounded-[8px]'>
                <div className='relative rounded-[8px] overflow-hidden'>
                    <img className='w-full  relative z-0' src={props.img} alt="images" />
                    <div className='bg-[#000000B2] overflow-hidden rounded-[8px] border-2 border-transparent absolute w-full z-[2] h-full flex justify-center group-hover:opacity-100 opacity-0 scale-[2] group-hover:scale-100 duration-500 items-center top-0'>
                        <Simplebtn simple="Jugar" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlotMap