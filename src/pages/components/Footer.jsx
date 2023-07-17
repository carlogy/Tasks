import Link from 'next/link';
import React from 'react';
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (

    <div className='w-full mx-auto fixed bottom-1 text-blue-600  hover:text-blue-800 '>
    <div className=" flex mx-auto  text-center align-middle">
    <div className="flex-auto  px-4 py-2">
    <Link  href="https://www.linkedin.com/in/carlogyannuzzi/">
    <FaLinkedin />LinkedIn</Link>
    </div>
    <div className="flex-auto px-4 py-2">
    <Link  href="https://twitter.com/1carlogy"><FaTwitter /> Twitter</Link>
    </div>
    <div className="flex-auto  px-4 py-2">
    <Link  href="https://github.com/carlogy"> <FaGithub /> GitHub</Link>
    </div>


  </div>
  <p className="text-center">© Carlo Yannuzzi.</p>
  </div>
  )
}

export default Footer