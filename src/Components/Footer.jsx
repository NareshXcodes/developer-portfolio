import React from 'react'
import reactLogo from '../assets/react.svg'

const Footer = () => {
  return (
    <div className="w-full h-20 flex items-center justify-center text-[#FDFDFD] bg-[#191919] ">
        <div align="center">
            <p className="secondaryFont flex items-center justify-center gap-2"><strong>Made with ❤️ and React</strong> <img className="w-5 h-5 inline" src={reactLogo} /></p>
            <p className="secondaryFont"><em>© 2025 Naresh Mahapatra. All Rights Reserved.</em></p>
        </div>
    </div>
  )
}

export default Footer