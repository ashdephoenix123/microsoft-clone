import Image from "next/image";
import Link from "next/link";
import Card from "./component/Card";
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Carousel from "./component/Carousel";
export default async function Home() {

  return (
    <>
      {/* <Image width={2000} height={60} src="/homeimage2.jpg" className="w-full h-[60vh] object-cover" /> */}
      <Carousel />
      <div className="container">
        <div className="flex justify-center py-4 my-16">
          <div className="flex flex-col items-center mx-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">    <path d="M 5 4 C 4.448 4 4 4.447 4 5 L 4 24 L 24 24 L 24 4 L 5 4 z M 26 4 L 26 24 L 46 24 L 46 5 C 46 4.447 45.552 4 45 4 L 26 4 z M 4 26 L 4 45 C 4 45.553 4.448 46 5 46 L 24 46 L 24 26 L 4 26 z M 26 26 L 26 46 L 45 46 C 45.552 46 46 45.553 46 45 L 46 26 L 26 26 z" /></svg>
            <Link className="mt-2 text1 font-semibold underline" href={'#'}>All New Microsoft</Link>
          </div>
          <div className="flex flex-col items-center mx-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">    <path d="M44.257,5.333l-12.412-3.3c-0.192-0.051-0.396-0.044-0.582,0.021l-25.588,8.8C5.271,10.993,5,11.373,5,11.8V36v1.2v1.065 v0.01c0,0.363,0.286,0.737,0.675,0.871l25.588,8.8C31.368,47.981,31.478,48,31.588,48c0.086,0,0.173-0.011,0.257-0.033l12.412-3.3 C44.695,44.55,45,44.153,45,43.7V6.3C45,5.847,44.695,5.45,44.257,5.333z M30,10.827v29.532L8.153,37.476l7.191-2.637 C15.738,34.695,16,34.32,16,33.9V13.715L30,10.827z" /></svg>
            <Link className="mt-2 text1 font-semibold underline" href={'#'}>Explore Microsoft 365</Link>
          </div>
          <div className="flex flex-col items-center mx-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">    <path d="M 25 2 C 20.709 2 16.618563 3.2007813 13.226562 5.3007812 C 13.007563 5.3737813 12.629156 5.6617969 12.285156 5.9667969 C 15.330156 3.5477969 22.371734 8.3929375 24.427734 9.8359375 C 24.773734 10.078938 25.228219 10.078938 25.574219 9.8359375 C 27.630219 8.3929375 34.671797 3.5467969 37.716797 5.9667969 C 37.372797 5.6617969 36.993391 5.3737813 36.775391 5.3007812 C 33.382391 3.2007813 29.291 2 25 2 z M 11 8 C 9.403 8 8.2363281 9.3007812 8.2363281 9.3007812 C 4.4443281 13.400781 2.0507812 18.9 2.0507812 25 C 2.0507812 37.7 12.328 48 25 48 C 31.685 48 37.771891 45.1 41.962891 40.5 C 41.962891 40.5 41.464094 37.499609 38.371094 33.099609 C 34.912094 27.882609 27.905109 21.311922 25.662109 19.294922 C 25.279109 18.950922 24.708125 18.952781 24.328125 19.300781 C 22.638125 20.847781 18.277406 25.177781 17.316406 26.300781 C 15.021406 28.700781 8.6353281 36.299609 8.2363281 40.599609 C 8.2363281 40.599609 6.8386406 37.200391 9.9316406 29.400391 C 11.856641 24.714391 17.835375 17.747984 20.734375 14.708984 C 21.119375 14.305984 21.110125 13.669109 20.703125 13.287109 C 19.743125 12.388109 17.505281 10.812609 15.488281 9.5996094 C 14.092281 8.6996094 12.497 8.1 11 8 z M 38.689453 8 C 38.036453 8 33.794078 9.3428281 29.330078 13.298828 C 28.908078 13.672828 28.891203 14.325469 29.283203 14.730469 C 30.900203 16.401469 35.322656 20.681391 37.972656 24.900391 C 41.265656 30.300391 43.2605 34.6 42.0625 40.5 C 45.7545 36.4 48.050781 31 48.050781 25 C 47.950781 19 45.655281 13.500391 41.863281 9.4003906 C 41.763281 9.3003906 41.663453 9.1996094 41.564453 9.0996094 C 40.766453 8.1996094 39.587453 8 38.689453 8 z" /></svg>
            <Link className="mt-2 text1 font-semibold underline" href={'#'}>Buy Xbox Games</Link>
          </div>
          <div className="flex flex-col items-center mx-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px">    <path d="M 5 4 C 4.448 4 4 4.447 4 5 L 4 24 L 24 24 L 24 4 L 5 4 z M 26 4 L 26 24 L 46 24 L 46 5 C 46 4.447 45.552 4 45 4 L 26 4 z M 4 26 L 4 45 C 4 45.553 4.448 46 5 46 L 24 46 L 24 26 L 4 26 z M 26 26 L 26 46 L 45 46 C 45.552 46 46 45.553 46 45 L 46 26 L 26 26 z" /></svg>
            <Link className="mt-2 text1 font-semibold underline" href={'#'}>Get Windows 11</Link>
          </div>

        </div>
        <div className="cardContainer">
          <Card
            title="Xbox Game Pass"
            description="Play hundreds of high-quality games on your console and PC, including new games on day one, online multiplayer and EA Play"
            link="Join now"
            imglink="/game.jpg"
          />
          <Card
            title="Surface Laptop 5"
            description="Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11."
            link="Learn more"
            imglink="/laptop.jpg"
          />
          <Card
            title="Xbox Series X"
            description="The fastest, most powerful Xbox ever."
            link="Shop Xbox series X"
            imglink="/xbox.png"
          />
          <Card
            title="Announcing the next wave of AI innovation"
            description="The new Microsoft Bing and Edge will soon feature more visual search responses, chat history, and persistent chat within Edge. We’re also adding actions to help people complete tasks."
            link="Learn more about it"
            imglink="/bing.jpeg"
          />
        </div>
        <div className="bg1 flex px-24 py-24 justify-between my-20">
          <div className="flex flex-col justify-center basis-1/3">
            <h3 className="text-4xl font-semibold">Windows 11 for Business</h3>
            <p className="my-6">Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.</p>
            <button className="bg2 py-2 px-4 text-white self-start">Learn more</button>
          </div>
          <Image src={'/11.png'} width={500} height={500} alt="11.png"></Image>
        </div>
        <h2 className="text-4xl font-semibold mb-4">For Business</h2>
        <div className="cardContainer">
          <Card
            title="Surface for Business"
            description="No matter what you do, there’s a Surface to help you do it."
            link="Shop now"
            imglink="/7.png"
          />
          <Card
            title="Thrive in a hybrid world"
            description="Discover tools, resources and strategies to help your employees succeed in the new world of flexible work."
            link="Learn more"
            imglink="/8.jpg"
          />
          <Card
            title="Welcome to your Windows 365 Cloud PC"
            description="Securely stream your Windows experience from the Microsoft cloud to any device."
            link="Get it today"
            imglink="/9.jpg"
          />
          <Card
            title="Try Microsoft 365 for free"
            description="Get Microsoft Teams, secure cloud storage and premium apps across devices with a free one-month Microsoft 365 Business Standard trial."
            link="Start your free trial"
            imglink="/10.jpg"
          />
        </div>
        <div className="relative mt-20 mb-16">
          <Image src={'/river.jpg'} width={500} height={500} className="w-full h-[60vh] object-cover" alt="river"></Image>
          <div className="px-12 py-16 bg-white absolute top-16 left-16 width1">
            <h3 className="text-4xl font-semibold">Enabling a more sustainable future</h3>
            <p className="my-6">Discover how Microsoft is progressing to become carbon negative, water positive, and zero waste—all while protecting more land than we use.</p>
            <button className="bg2 py-2 px-4 text-white self-start">Learn about our progress</button>
          </div>
        </div>
        <div className="flex items-center mb-24">
          <p className="mr-3">Follow Microsoft</p>
          <Link target="_blank" href={'https://www.instagram.com/akashsarki_/'}>
            <FaInstagram className="mx-3" size={25} />
          </Link>
          <Link target="_blank" href={'https://twitter.com/akashsarki_'}>
            <FaTwitter className="mx-3" size={25} />
          </Link>
          <Link target="_blank" href={'https://www.linkedin.com/in/akashsarki/'}>
            <FaLinkedinIn className="mx-3" size={25} />
          </Link>
        </div>
      </div>
    </>
  )
}