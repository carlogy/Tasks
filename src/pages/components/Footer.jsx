import Link from 'next/link';
import React from 'react';
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (

    <div className='w-full mx-auto fixed bottom-1 text-med-blue'>
    <div className=" flex justify-center text-center align-middle">
    <div className="flex-shrink m-2  hover:text-dark-blue">
    <Link  href="https://www.linkedin.com/in/carlogyannuzzi/">
    <FaLinkedin className='ml-5 ' />LinkedIn</Link>
    </div>
    <div className="flex-shrink m-2  hover:text-dark-blue">
    <Link  href="https://twitter.com/1carlogy">
    <FaTwitter className="ml-4" />Twitter</Link>
    </div>
    <div className="flex-shrink m-2  hover:text-dark-blue">
    <Link  href="https://github.com/carlogy">
    <FaGithub className='ml-4' /> GitHub</Link>
    </div>


  </div>
  <p className="text-center">© Carlo Yannuzzi.</p>
  </div>
  )
}

export default Footer;