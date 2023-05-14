'use client';

import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { SlArrowRight } from 'react-icons/sl'
import { VscSearch } from 'react-icons/vsc'
import { BsCart3 } from 'react-icons/bs'
import { HiOutlineUserPlus } from 'react-icons/hi2'

const Navbar = () => {
    const [dropdown, setdropdown] = useState(false)
    const [search, setsearch] = useState(false)
    const ref = useRef(null)
    const searchref = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setdropdown(false);
        }
        if (searchref.current && !searchref.current.contains(event.target)) {
            setsearch(false);
            console.log(event.target)
        }
    };

    const searchHandler = () => {
        setsearch(true);
        if (search && searchref.current) {
            searchref.current.focus();
        }
    }

    const submitInputForm = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <nav className='navbar shadow-md relative'>
                <div className="container">
                    <div className="py-3 flex items-center fontsm">
                        <Link href="#" className="flex">
                            <Image src="/macrosoft.png" width={30} height={10} className='mr-1' alt='logo'></Image>
                            <span className='text-xl font-semibold tracking-tight text-gray-700'>Microsoft</span>
                        </Link>
                        {!search ?
                            <> <ul className='flex ml-4 mr-auto'>
                                <li className='mx-2 border-transparent border-2 hover:border-b-black'><Link href='#'>Microsoft 365</Link></li>
                                <li className='mx-2 border-transparent border-2 hover:border-b-black'><Link href='#'>Teams</Link></li>
                                <li className='mx-2 border-transparent border-2 hover:border-b-black'><Link href='#'>Windows</Link></li>
                                <li className='mx-2 border-transparent border-2 hover:border-b-black'><Link href='#'>Surface</Link></li>
                                <li className='mx-2 border-transparent border-2 hover:border-b-black'><Link href='#'>Xbox</Link></li>
                                <li className='mx-2 border-transparent border-2 hover:border-b-black'><Link href='#'>Support</Link></li>
                            </ul>
                                <ul className='flex'>
                                    <li className='flex items-center mr-4 cursor-pointer' onClick={() => setdropdown(prev => !prev)}><div className='mr-1 border-transparent border-2 hover:border-b-black' >All Microsoft</div><MdOutlineKeyboardArrowDown /></li>
                                    <li className='flex items-center mr-4 cursor-pointer' onClick={searchHandler}><div className='mr-1 border-transparent border-2 hover:border-b-black'>Search</div><VscSearch size={15} /></li>
                                    <li className='flex items-center mr-4 cursor-pointer'><Link href={'#'} className='mr-1 border-transparent border-2 hover:border-b-black'>Cart</Link><BsCart3 size={16} /></li>
                                    <li className='flex items-center cursor-pointer'><Link className='mr-2' href={'#'}>Sign In</Link><HiOutlineUserPlus size={20} className='border border-gray-600 rounded-2xl p-1.5 text-gray-600 box-content' /></li>
                                </ul></> : <>
                                <div className='ml-6 flex w-full'>
                                    <div className='flex items-center w-full' ref={searchref}>
                                        <input type="text" className='border-2 border-blue-500 focus:outline-none px-4 py-1.5 mr-2 w-full' placeholder='Search Microsoft.com' />
                                        <button className='-ml-10 p-1.5' onClick={submitInputForm}>
                                            <VscSearch size={18} />
                                        </button>
                                    </div>
                                    <button className='ml-4 border py-1.5 px-4 border-black' onClick={() => setsearch(false)}>Cancel</button>
                                </div>
                            </>}
                    </div>
                </div>
            </nav>
            {dropdown &&
                <div className='dropdown z-10' ref={ref}>
                    <div className="dropdownGrid mb-6">
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Software</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Windows Apps</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">AI</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">OneDrive</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Outlook</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Skype</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">OneNote</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Microsoft Teams</Link></li>
                            </ul>
                        </div>
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>PCs & Devices</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Shop Xbox</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Accesssories</Link></li>
                            </ul>
                        </div>
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Entertainment</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Xbox Game Pass Ultimate</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Xbox Live Gold</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Xbox games</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">PC games</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Windows digital games</Link></li>
                            </ul>
                        </div>
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Business</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Microsoft Cloud</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Microsoft Security</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Azure</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Dynamics 365</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Microsoft 365 for business</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Microsoft Industry</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Microsoft Power Platform</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Windows 365</Link></li>
                            </ul>
                        </div>
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Developer & IT</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Developer Center</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Documentation</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Microsoft Learn</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Microsoft Tech Community</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Azure Marketplace</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">AppSource</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Visual Studio</Link></li>
                            </ul>
                        </div>
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Other</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Free downloads & Security</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Education</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Gift Cards</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Licensing</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='absolute w-full left-0 border-b-black border-b-2'>
                        <div className="block bg-zinc-200 w-full text-center py-2">
                            <Link href={'#'}><span className='uppercase fontxs mr-1.5 hover:underline'>view sitemap</span></Link>
                            <SlArrowRight size={12} className='inline-block text-sm' />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar
