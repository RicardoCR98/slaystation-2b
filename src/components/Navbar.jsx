import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from './Input';
import { Button } from './Button';

export const Navbar = ({ photo, condition }) => {
  return (
    <nav className='bg-gray-800 py-2 '>
      <div className='w-full flex justify-between px-2 items-center'>
        {/* First Part */}
        <button
          className='block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden'
          type='button'
          data-twe-collapse-init
          data-twe-target='#navbarSupportedContent1'
          aria-controls='navbarSupportedContent1'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </button>
        <div
          className='flex items-center space-x-3 rtl:space-x-reverse'
          id='navbarSupportedContent1'
          data-twe-collapse-item
        >
          <Link
            className='mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0'
            to="/"
          >
            <img className='w-16' src={photo} alt='Logo' />
          </Link>
          <ul
            className='list-style-none me-auto flex flex-col ps-0 lg:flex-row'
            data-twe-navbar-nav-ref
          >
            <li className='mb-4 lg:mb-0 lg:pe-2' data-twe-nav-item-ref>
              <a
                className='text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2'
                href='#'
                data-twe-nav-link-ref
              >
                Location
              </a>
            </li>
          </ul>
        </div>
        {/* Second Part */}
        <div className='w-96'>
          <Input placeholder='Search' />
        </div>
        {/* Third Part */}
        <div className='relative flex items-center'>
          <a className='me-4 text-neutral-600 dark:text-white' href='#'>
            <span className='[&>svg]:w-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
              </svg>
            </span>
          </a>
          
          <Button condition={condition} />

        </div>
      </div>
    </nav>
  );
};
