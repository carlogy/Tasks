import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className='w-full fixed bottom-0'>
    <div className="flex text-center ">
    <Link className='flex-1  px-4 py-2' href="https://www.linkedin.com/in/carlogyannuzzi/">LinkedIn</Link>
    <Link className="flex-1  px-4 py-2 " href="https://twitter.com/1carlogy">Twitter</Link>
    <Link className="flex-1  px-4 py-2" href="https://github.com/carlogy">GitHub</Link>

  </div>
  <p className="text-center">© Carlo Yannuzzi.</p>
  </div>
  )
}

export default Footer