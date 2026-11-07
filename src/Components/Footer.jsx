import React from 'react'
import reactLogo from '../assets/react.svg'

const Footer = () => {
  return (
    <footer className="w-full h-20 flex items-center justify-center text-[#FDFDFD] bg-[#191919]">
        <div className="text-center">
            <p className="secondaryFont flex items-center justify-center gap-2"><strong>Made with ❤️ and React</strong> <img className="w-5 h-5 inline" src={reactLogo} alt="" aria-hidden="true" /></p>
            <p className="secondaryFont"><em>© 2026 Naresh Mahapatra. All Rights Reserved.</em></p>
        </div>
    </footer>
  )
}

export default Footer