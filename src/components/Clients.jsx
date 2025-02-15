import React from 'react'
import clientsImgLogo01 from '../assets/img/clients/client-01.png'
import clientsImgLogo02 from '../assets/img/clients/client-02.png'
import clientsImgLogo03 from '../assets/img/clients/client-03.png'
import clientsImgLogo04 from '../assets/img/clients/client-04.png'
import clientsImgLogo05 from '../assets/img/clients/client-05.png'
import clientsImgLogo06 from '../assets/img/clients/client-06.png'
import clientsImgLogo07 from '../assets/img/clients/client-07.png'

function Clients() {
    const clientsImgLogo = [clientsImgLogo01,clientsImgLogo02,clientsImgLogo03,clientsImgLogo04,clientsImgLogo05,clientsImgLogo06,clientsImgLogo07];

  return (
    <div className='container mx-auto max-w-[1320px] py-10 text-center'>
        <h2 className='text-[2.25rem] font-semibold text-[#4d4d4d]'>Our Clients</h2>
        <p className='text-[#717171]'>We have been working with some Fortune 500+ clients</p>
        <ul className='flex flex-col items-center md:flex-row md:justify-between my-10'>
            {clientsImgLogo.map((client,index)=>(
                <li key={index}>
                    <img src={client} alt=''/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Clients