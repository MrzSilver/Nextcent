import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Frame() {
  return (
    <div className='bg-[#f5f7fa] py-10 flex justify-center text-center'>
        <div>
            <h3 className='text-[#263238] text-[4rem] font-semibold leading-[1]'>Pellentesque suscipit <br/> fringilla libero eu.</h3>
            <a className='inline-flex justify-center items-center py-3 px-8 mt-5 bg-[#4CAF4F] rounded-md text-white font-bold' href="#">Get a Demo <FaArrowRightLong className='ml-2'/></a>
        </div>
    </div>
  )
}

export default Frame