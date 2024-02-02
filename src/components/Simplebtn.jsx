import React, { useState } from 'react'

const Simplebtn = (props) => {
  const [change, setchange] = useState(false)
  function mouseover() {
    setchange(true)
  }
  function mouseout() {
    setchange(false)
  }
  return (
    <div className=''>
      <button className={`py-[10px] sm:py-[13px] px-[35px] sm:px-[46px] text-center ${change ? "after:content-[url(./assets/images/design-border.svg)]" : "after:content-[url(./assets/images/simple-border.svg)]"} rounded-[41px] border border-white hover:shadow-[0px_0px_20px_#7AF57A] after:absolute relative bg-transparent text-white after:left-[-4%] after:bottom-[-25%] group hover:bg-hover hover:border-transparent duration-300`} onMouseOver={mouseover} onMouseOut={mouseout}>{props.simple}</button>
    </div>
  )
}
export default Simplebtn