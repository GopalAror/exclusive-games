import React from 'react'

const Designbtn = (props) => {
  return (
    <div>
      <button className={` py-[10px] sm:py-[13px] hover:shadow-[0px_0px_20px_#7AF57A] px-[30px] sm:px-[46px] text-[#00141B]  border border-transparent hover:bg-white hover:border-white hover:bg-transparent font-Inter text-[16px] font-bold leading-[25px] rounded-[41px] after:content-[url(./assets/images/design-border.svg)] bg-hover after:absolute relative after:left-[-4%] after:bottom-[-25%] duration-300`}>{props.design}</button>
    </div>
  )
}

export default Designbtn
