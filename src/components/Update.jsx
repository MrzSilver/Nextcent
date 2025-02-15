import React from 'react'
import ArticleImg01 from '../assets/img/article-01.png'
import ArticleImg02 from '../assets/img/article-02.png'
import ArticleImg03 from '../assets/img/article-03.png'
import { FaArrowRightLong } from "react-icons/fa6";

function Update() {
    return (
        <div className='pt-10 pb-20 text-center'>
            <div className='container mx-auto max-w-[1320px]'>
                <h3 className='text-[2.25rem] font-semibold text-[#4D4D4D]'>Caring is the new marketing</h3>
                <p className='text-[#717171]'>The Nexcent blog is the best place to read about the latest membership insights, <br />trends and more. See who's joining the community, read about how our community <br />are increasing their membership income and lot's more.​</p>
                <div className='my-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        <div className='relative m-5 md:m-0'>
                            <img className='rounded-xl' src={ArticleImg01} alt="" />
                            <div className='absolute bg-[#f5f7fa] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[370px] p-5 shadow-lg rounded-xl'>
                                <p className='font-bold text-[1.25rem] text-[#717171] mb-5'>Creating Streamlined Safeguarding Processes with OneRen</p>
                                <a className='flex justify-center items-center text-[#4caf4f] font-bold' href="#">Readmore <FaArrowRightLong className='ml-2' /></a>
                            </div>
                        </div>

                        <div className='relative m-5 md:m-0'>
                            <img className='rounded-xl' src={ArticleImg02} alt="" />
                            <div className='absolute bg-[#f5f7fa] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[370px] p-5 shadow-lg rounded-xl'>
                                <p className='font-bold text-[1.25rem] text-[#717171] mb-5'>What are your safeguarding responsibilities and how can you manage them?</p>
                                <a className='flex justify-center items-center text-[#4caf4f] font-bold' href="#">Readmore <FaArrowRightLong className='ml-2'/></a>
                            </div>
                        </div>

                        <div className='relative m-5 md:m-0'>
                            <img className='rounded-xl' src={ArticleImg03} alt="" />
                            <div className='absolute bg-[#f5f7fa] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[370px] p-5 shadow-lg rounded-xl'>
                                <p className='font-bold text-[1.25rem] text-[#717171] mb-5'>Revamping the Membership Model with Triathlon Australia</p>
                                <a className='flex justify-center items-center text-[#4caf4f] font-bold' href="#">Readmore <FaArrowRightLong className='ml-2'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update