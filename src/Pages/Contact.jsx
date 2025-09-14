import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCodepen, FaStackOverflow } from 'react-icons/fa'

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      link: "mailto:codes.xdev@gmail.com", // Replace with your actual email
      username: "naresh.mahapatra@example.com"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/NareshXcodes",
      username: "@NareshXcodes"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/naresh-mahapatra", // Replace with your LinkedIn
      username: "naresh-mahapatra"
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      link: "https://twitter.com/nareshxcodes", // Replace with your Twitter
      username: "@nareshxcodes"
    },
    {
      icon: <FaCodepen />,
      label: "CodePen",
      link: "https://codepen.io/nareshxcodes", // Replace with your CodePen
      username: "@nareshxcodes"
    },
    {
      icon: <FaStackOverflow />,
      label: "Stack Overflow",
      link: "https://stackoverflow.com/users/your-id", // Replace with your Stack Overflow
      username: "naresh-mahapatra"
    }
  ]

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#0a0a0a] via-[#161513] to-[#1a1a1a] pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="PrimaryFont OrangeGradient text-4xl lg:text-5xl font-bold mb-4">
            CONTACT
          </h1>
          <p className="SecondaryFont text-gray-400 text-lg">
            Let's connect and build something amazing together.
          </p>
        </div>

        {/* Social Links - Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border-l-4 border-blue-500 hover:border-orange-500 transition-colors duration-300 group"
            >
              <div className="text-2xl text-gray-400 group-hover:text-white transition-colors duration-300">
                {social.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 SecondaryFont">{social.label}</h3>
                <p className="text-gray-500 text-sm SecondaryFont">{social.username}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Simple Footer Message */}
        <div className="text-center mt-16">
          <p className="text-gray-500 SecondaryFont">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact