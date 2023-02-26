import SocialMediaIcons from "../components/SocialMediaIcons";

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-fuchsia-900 mx-auto">
        <div className="w-5/6 mt-9 py-5">
            <div className="md:ml-20 ">
                <SocialMediaIcons/>
            </div>
            <div className="md:flex justify-center text-center md:justify-between md:ml-20 ">
                <p className="font-semibold text-2xl text-fuchsia-300 font-playfait">Shwe Chyu Naing</p>
                <p>30223 CHYU. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer