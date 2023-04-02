import React from 'react';
import { Wrapper } from './shared/wrapper';

export default function CoreCourses() {
  return (
    <Wrapper>
      <section className='core-courses mt-20 mb-20'>
        <div className='container mx-auto'>
          <div className='bg-[#05C19C99/0.6] absolute blur-[250px] rounded-[50%] w-80 h-80 -z-1'></div>
          <p className=''>Program of Studies</p>
          <h1 className='font-bold text-3xl mb-5'>
            Core Courses <br /> (Common in All Specializations):
          </h1>
          <p className='mb-5'>
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <button
            style={{ backgroundColor: '#00616C', color: 'white' }}
            className='hover:bg-sky-700 rounded-full p-3 w-50'
          >
            Learn More
          </button>
        </div>

        <div className='container mx-auto mt-20'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='border relative shadow-lg rounded-md xxs:w-auto xs:w-auto p-10 h-72 m-2 flex flex-col justify-center md:w-2/4 z-[-1] xxs:z-[-1]'>
              <h1 className='text-lg mb-5 font-semibold'>Quarter I</h1>
              <p style={{ color: '#4A5B5C' }}>
                CS-101: Object-Oriented Programming using TypeScript
              </p>
              <span className='absolute text-gray-200 -top-0 text-[170px] right-10 text-9xl font-bold -z-10'>
                1
              </span>
            </div>
            <div className='border relative shadow-lg rounded-md	xxs:w-auto xs:w-auto p-10 h-72 m-2 flex flex-col justify-center md:w-2/4 z-[-1] xxs:z-[-1]'>
              <h1 className='text-lg mb-5 font-semibold'>Quarter II </h1>
              <p style={{ color: '#4A5B5C' }}>
                W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud
                Apps and APIs using Next.js 13 and Cloud Development Kit (CDK)
                for Terraform
              </p>
              <span className='absolute text-gray-200 -top-0 text-[170px] right-10 text-9xl font-bold -z-10'>
                2
              </span>
            </div>
            <div className='border relative shadow-lg rounded-md	xxs:w-auto xs:w-auto p-10 h-72 m-2 flex flex-col justify-center md:w-2/4 z-[-1] xxs:z-[-1]'>
              <h1 className='text-lg mb-5 font-semibold'>Quarter III</h1>
              <p style={{ color: '#4A5B5C' }}>
                $-101: Dollar Making Bootcamp - Full-Stack Template and API
                Product Development
              </p>
              <span className='absolute text-gray-200 -top-0 text-[170px] right-10 text-9xl font-bold -z-10'>
                3
              </span>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
