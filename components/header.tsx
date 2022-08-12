import Link from "next/link";
import React from "react";

const Header: React.FC = () => (
  <header className="bg-gray-900 sm:h-20 py-5 border-b sm:sticky top-0">
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          {/* <img src="/react-bricks-logo.svg" className="w-48" alt="Jimmy's Portfolio" /> */}
          <h1 className="text-white">Jimmy's Portfolio</h1>
          <div className="sm:ml-8 flex space-x-5 text-center">
            <Link href="/">
              <a className="text-white hover:text-pink-700">About me</a>
            </Link>
            <Link href="/skills">
              <a className="text-white hover:text-pink-700">Skills</a>
            </Link>
            <Link href="/projects">
              <a className="text-white hover:text-pink-700">Projects</a>
            </Link>
            <Link href="/experience">
              <a className="text-white hover:text-pink-700">Experience</a>
            </Link>
            <Link href="/education">
              <a className="text-white hover:text-pink-700">Education</a>
            </Link>
          </div>
        </div>
        {/* <Link href="/admin" prefetch={false}>
          <a className="py-2 px-5 rounded text-white font-medium bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg transition duration-200">
            Edit content
          </a>
        </Link> */}
      </div>
    </div>
  </header>
);

export default Header;
