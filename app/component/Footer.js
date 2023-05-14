import Link from 'next/link'
import React from 'react'
import { BsGlobeAmericas } from 'react-icons/bs'


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='pb-8'>
            <div className="footer__links">
                <div className="footer__links-1">
                    <h3>What's new</h3>
                    <ul className="footer__links-1 tracking-wide">
                        <li className="footer__links-lists py-1.5 hover:underline"><Link href="#">Microsoft 365</Link></li>
                        <li className="footer__links-lists py-1.5 hover:underline"><Link href="#">Games</Link></li>
                        <li className="footer__links-lists py-1.5 hover:underline"><Link href="#">Surface Pro 9</Link></li>
                        <li className="footer__links-lists py-1.5 hover:underline"><Link href="#">Surface Laptop 5</Link></li>
                        <li className="footer__links-lists py-1.5 hover:underline"><Link href="#">Surface Laptop Studio</Link></li>
                        <li className="footer__links-lists py-1.5 hover:underline"><Link href="#">Surface Laptop Go 2</Link></li>
                        <li className="footer__links-lists py-1.5 hover:underline"><Link href="#">Windows 11 apps</Link></li>
                    </ul>
                </div>
                <div className="footer__links-1">
                    <h3>Microsoft Store</h3>
                    <ul className="footer__links-1">
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Account Profile</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Download Center</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft Store Support</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Returns</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Order tracking</Link></li>
                    </ul>
                </div>
                <div className="footer__links-1">
                    <h3>Education</h3>
                    <ul className="footer__links-1">
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft in education</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Devices for education</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft Teams for Education</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft 365 Education</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Office Education</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Educator training and development</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Deals for students and parents</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Azure for students</Link></li>
                    </ul>
                </div>
                <div className="footer__links-1">
                    <h3>Business</h3>
                    <ul className="footer__links-1">
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft Cloud</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft Security</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Azure</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Dynamic 365</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft 365</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft Advertising</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft Industry</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft Teams</Link></li>
                    </ul>
                </div>
                <div className="footer__links-1">
                    <h3>Developer & IT</h3>
                    <ul className="footer__links-1">
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Developer Center</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Documentation</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft Learn</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft Tech Community</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Azure Marketplace</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">AppSource</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Microsoft Power Platform</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Visual Studio</Link></li>

                    </ul>
                </div>
                <div className="footer__links-1">
                    <h3>Company</h3>
                    <ul className="footer__links-1">
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Careers</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">About Microsoft</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Company news</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Privacy at Microsoft</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Investors</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Security</Link></li>
                        <li className="footer__links-lists  py-1.5 hover:underline"><Link href="#">Sustainability</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-wrap container2 items-center justify-between mb-4 copy'>
                <Link href={'#'} className='flex hover:underline items-center mb-4 ml-4 sm:mb-0'>
                    <BsGlobeAmericas className='mr-2 text2' size={18}/>
                    <span>English (India)</span>
                </Link>
                <ul className='flex flex-wrap'>
                    <li className='mx-4 hover:underline'><Link href='#'>Contact Microsoft</Link></li>
                    <li className='mx-4 hover:underline'><Link href='#'>Privacy</Link></li>
                    <li className='mx-4 hover:underline'><Link href='#'>Terms of use</Link></li>
                    <li className='mx-4 hover:underline'><Link href='#'>Trademarks</Link></li>
                    <li className='mx-4 hover:underline'><Link href='#'>About our ads</Link></li>
                    <li className='mx-4'>&copy; Microsoft Clone {year}</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
