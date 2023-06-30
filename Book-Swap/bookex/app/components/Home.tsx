import React from 'react'
import Image from 'next/image'
import Header from './Header'
import channelImage from "./bgb.png";
import Banner from './Banner'
function Home() {
  return (
    <div>
        <Header/>
        {/* <div className="relative">
            <Image className="w-full h-full object-contain sm:max-h-96" src={channelImage}  alt="Description"   />
        </div> */}
        <Banner/>
    </div>
  )
}

export default Home