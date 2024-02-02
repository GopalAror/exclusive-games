import React from 'react'
import Designbtn from './Designbtn'

const ReadMore = () => {
  return (
    <div className='pb-[60px] sm:pb-[120px] px-3'>
      <div className="max-w-[1140px] mx-auto px-3 min-h-[341px] justify-center rounded-[16px] border-[0.5px] bg-[url(./assets/images/readmore.bg.webp)] bg-no-repeat bg-100 h-full flex flex-col items-center">
        <h3 className='font-Anton font-normal text-[32px] leading-[41px] text-center text-white pb-[40px]'>Lanza tu propia plataforma en sólo 2 semanas</h3>
        <Designbtn design="Leer más" />
      </div>
    </div>
  )
}

export default ReadMore
