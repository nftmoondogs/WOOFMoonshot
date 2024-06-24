// components/Navbar.js
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4 xl:px-0">
        <a href="/" className="flex items-center">
          <img src="https://i.ibb.co/XCnhwBb/WOOF1.png" alt="WOOF Logo" className="h-12" />
        </a>
        <div className="flex items-center">
          {/* Social Icons */}
          <a href="https://twitter.com/woofsoltoken" target="_blank" rel="noopener noreferrer" className="text-white px-3">
          <svg className="fill-current text-white hover:text-gray-400" width="30" height="30" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
              {/* Replace with your Twitter path */}
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </a>
          <a href="https://t.me/woofsoltoken" target="_blank" rel="noopener noreferrer" className="text-white px-3">
          <svg className="fill-current text-white hover:text-gray-400" width="30" height="30" viewBox="0 0 25 19" xmlns="http://www.w3.org/2000/svg">
              {/* Replace with your Telegram path */}
              <path d="M13.3103 4.23944C7.20757 6.43516 1.93754 8.32934 1.59915 8.44876C0.546349 8.81994 0.233791 9.3417 0.73107 9.89772C0.924439 10.1137 1.49152 10.3176 3.88269 11.0306L6.79864 11.9L8.00543 15.3452C9.22023 18.813 9.31004 18.9985 9.83576 19.1254C10.1929 19.2117 10.4922 18.9993 12.1484 17.4847C13.0069 16.6995 13.76 16.0571 13.8219 16.0571C13.8839 16.0571 15.2357 16.9669 16.8261 18.0788C18.5122 19.2576 19.8793 20.143 20.1054 20.2026C20.5626 20.323 21.1189 20.121 21.3712 19.7429C21.5125 19.5311 25.5 1.34493 25.5 0.912331C25.5 0.617991 25.0344 0.226573 24.6972 0.237593C24.5371 0.242803 19.4129 2.04361 13.3103 4.23944ZM20.9967 3.94049C21.016 4.03857 19.1595 5.71494 15.9968 8.45527C13.2299 10.8526 10.816 12.9464 10.6328 13.1081C10.3007 13.4011 10.2988 13.4088 10.1221 15.0818C10.0245 16.0056 9.92557 16.743 9.90203 16.7204C9.87859 16.6978 9.48497 15.4956 9.02728 14.0487C8.43728 12.1832 8.22755 11.387 8.30653 11.3111C8.36768 11.2523 11.1478 9.52403 14.4844 7.47066C18.1016 5.24458 20.6348 3.74673 20.7585 3.76086C20.8725 3.77388 20.9797 3.85473 20.9967 3.94049Z" />
            </svg>
          </a>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="hover:text-gray-400 text-xl font-courier">About</a>
            <a href="#tokenomics" className="hover:text-gray-400 text-xl font-courier">Tokenomics</a>
            <a href="#foundation" className="hover:text-gray-400 text-xl font-courier">Foundation</a>
            {/* Trade Button */}

          </div>
        </div>
      </div>
    </nav>
  );
}
