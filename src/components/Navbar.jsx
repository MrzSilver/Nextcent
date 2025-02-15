import React,{useState} from 'react'
import Logo from '../assets/img/logo-black.png'
import { FaBars } from 'react-icons/fa'

function Navbar() {
    const [toggle,setToggle] = useState(false);

    const openMenu =() =>{
        setToggle(!toggle)
    }

  return (
    <nav className='bg-[#F5F7FA]'>
        <div className='container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:h-[80px] md:items-center'>
            <div className=''>
                <a>
                    <img src={Logo}/>
                </a>
            </div>

            <ul className={`${!toggle ? 'hidden' : 'flex' } flex flex-col md:flex-row my-5  md:flex`}>
                <li className='my-2 md:mx-2 hover:bg-[#4CAF4F] md:p-7'>
                    <a href='/'>Home</a>
                </li>
                <li className='my-2 md:mx-2 hover:bg-[#4CAF4F] md:p-7'>
                    <a href='/'>Servie</a>
                </li>
                <li className='my-2 md:mx-2 hover:bg-[#4CAF4F] md:p-7'>
                    <a href='/'>Feature</a>
                </li>
                <li className='my-2 md:mx-2 hover:bg-[#4CAF4F] md:p-7'>
                    <a href='/'>Product</a>
                </li>
                <li className='my-2 md:mx-2 hover:bg-[#4CAF4F] md:p-7'>
                    <a href='/'>Testimonial</a>
                </li>
                <li className='my-2 md:mx-2 hover:bg-[#4CAF4F] md:p-7'>
                    <a href='/'>FAQ</a>
                </li>
            </ul>

            <ul className={`${!toggle ? 'hidden' : 'flex' } md:flex flex flex-col md:flex-row my-5 `}>
                <li className='my-2 md:mx-2'>
                    <a className='inline-flex justify-center items-center py-2 px-4 text-[#4CAF4F]' href='/'>Login</a>
                </li>
                    
                <li className='my-2 md:mx-2'>
                    <a className='inline-flex justify-center items-center py-2 px-4 bg-[#4CAF4F] rounded-md text-white text-nowrap' href='/'>Sign up</a>
                </li>
            </ul>

            {/* Hamburger Menu */}
            <FaBars onClick={openMenu} className='absolute right-5 cursor-pointer text-3xl md:hidden'/>

        </div>
    </nav>
  )
}

export default Navbar
