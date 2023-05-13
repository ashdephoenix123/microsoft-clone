import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import React from 'react'

const Card = ({ title, description, link, imglink }) => {
    return (
        <>
            <div className="cardItem">
                <Link href="/">
                    <Image src={imglink} width={150} height={150} className="w-full imagesize" alt={imglink}></Image>
                    <h2 className="text-3xl my-4 font-semibold">{title}</h2>
                    <p>{description}</p>
                    <button className="flex my-4 items-center text1 font-semibold hover:underline"><span className='hover:mr-0.5 transition-all'>{link}</span><IoIosArrowForward size={20} className="ml-1" /></button>
                </Link>
            </div>
        </>
    )
}

export default Card
