import React from 'react';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className='flex max-w-screen-2xl justify-between mx-auto bg-white py-6 px-2 sticky top-0 items-center'>
      <div className=''>
        <Image
          width={100}
          height={100}
          src='https://www.panaverse.co/red-p-logo-text_dao_croped.png'
          alt='Logo'
          // className='h-8 mr-2'
        />
      </div>
      <div className=' flex space-x-8 font-medium mt-15'>
        <a href='#' className='mr-4'>
          Courses
        </a>
        <a href='#' className='mr-4'>
          Blogs
        </a>
        <a href='#' className='mr-4'>
          Video
        </a>
      </div>
    </header>
  );
};
