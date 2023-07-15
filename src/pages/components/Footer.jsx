import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="flex-box text-center bottom-0 absolute left-0 right-0 mb-3">
    <Link className='inline-flex  px-4 py-2' href="https://www.linkedin.com/in/carlogyannuzzi/">LinkedIn</Link>
    <Link className="inline-flex  px-4 py-2 " href="https://twitter.com/1carlogy">Twitter</Link>
    <Link className="inline-flex  px-4 py-2" href="https://github.com/carlogy">GitHub</Link>
    <p className=" items-center">© Carlo Yannuzzi.</p>
  </div>
  )
}

export default Footer