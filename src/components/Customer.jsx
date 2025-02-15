import React from 'react'

import Tim from '../assets/img/tim-smith.png'
import clientsImgLogo01 from '../assets/img/clients/client-01.png'
import clientsImgLogo02 from '../assets/img/clients/client-02.png'
import clientsImgLogo03 from '../assets/img/clients/client-03.png'
import clientsImgLogo04 from '../assets/img/clients/client-04.png'
import clientsImgLogo05 from '../assets/img/clients/client-05.png'
import clientsImgLogo06 from '../assets/img/clients/client-06.png'
import { FaArrowRightLong } from "react-icons/fa6";


function Customer() {
  return (
    <div className='bg-[#F5F7FA] py-10 '>
        <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2'>
            <div>
                <img src={Tim} alt="" />
            </div>
            <div>
                <div>
                    <p className='text-[#717171] my-5'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h3 className='text-[#4CAF4F] mt-5 md:mt-0 text-[1.75rem] font-semibold'>Tim Smith</h3>
                    <p className='text-[#717171]'>British Dragon Boat Racing Association</p>
                    <ul className='flex flex-col md:flex-row items-center md:justify-between mt-10'>
                        <li><img src={clientsImgLogo01} alt="" /></li>
                        <li><img src={clientsImgLogo02} alt="" /></li>
                        <li><img src={clientsImgLogo03} alt="" /></li>
                        <li><img src={clientsImgLogo04} alt="" /></li>
                        <li><img src={clientsImgLogo05} alt="" /></li>
                        <li><img src={clientsImgLogo06} alt="" /></li>
                        <li><a className='text-[#4CAF4F] flex items-center font-bold' href="/">Meet all customers <FaArrowRightLong className='ml-2'/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customer