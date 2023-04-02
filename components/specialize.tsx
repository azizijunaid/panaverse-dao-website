import React from 'react';
import { Wrapper } from './shared/wrapper';
import Image from 'next/image';
import rightIcon from '@/assets/right-icon.png';

export default function Specialize() {
  return (
    <Wrapper>
      <section className='specialize-track mt-20 mb-20'>
        <div className='md:container sm:container xxs:container mx-auto'>
          <h1 className='text-4xl mb-4'>Specialized Tracks:</h1>
          <p
            className='text xxs:w-auto md:w-1/3 mb-10'
            style={{ color: '#4A5B5C' }}
          >
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{' '}
          </p>

          <div className='flex flex-col md:flex-row items-center'>
            <div
              className='border flex-1  border-[#00616C_30] rounded-lg md:w-3/5 xxs:w-auto p-10 shadow-[0_2px_50px_0_#0000000D]'
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <p className='mb-3'>Specialized Program</p>
              <h1 className='text-4xl mb-10 w-3/4 font-semibold'>
                Web 3.0 (Blockchain) and Metaverse Specialization
              </h1>
              <p className='mb-4 text-[#4A5B5C]'>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences for the next
                generation of the internet by specializing in building worlds
                that merge the best of cutting-edge decentralized distributed
                blockchains with 3D metaverse client experiences.
              </p>
              <a className='underline' href=''>
                Learn More
              </a>

              <div className='flex flex-col md:flex-row justify-between mt-5 mb-20'>
                <div className='w-100'>
                  <h1 className='text-2xl'>Quarter IV</h1>
                  <p className='mt-4 xxs:auto md:w-3/5 text-[#4A5B5C]'>
                    W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                    Cloud Apps and APIs using Next.js 13 and Cloud Development
                    Kit (CDK) for Terraform
                  </p>
                </div>
                <div className='w-100'>
                  <h1 className='text-2xl'>Quarter V</h1>
                  <p className='mt-4 xxs:auto md:w-3/5 text-[#4A5B5C]'>
                    W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud
                    Cloud Apps and APIs using Next.js 13 and Cloud Development
                    Kit (CDK) for Terraform
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-2/5 divide-y divide-dashed xxs:mt-20'>
              <div className='flex justify-evenly pb-8'>
                <Image src={rightIcon} alt='hero' className='md:w-30 md:h10' />
                <div className='flex flex-col xxs:ml-4'>
                  <p>Specialized Program</p>
                  <h1>Web 3.0 (Blockchain) and Metaverse Specialization</h1>
                </div>
              </div>
              <div className='flex justify-evenly pt-8 pb-8'>
                <Image src={rightIcon} alt='hero' className='md:w-30 md:h10' />
                <div className='flex flex-col xxs:ml-4'>
                  <p>Specialized Program</p>
                  <h1>Web 3.0 (Blockchain) and Metaverse Specialization</h1>
                </div>
              </div>
              <div className='flex justify-evenly pt-8 pb-8'>
                <Image src={rightIcon} alt='hero' className='md:w-30 md:h10' />
                <div className='flex flex-col xxs:ml-4'>
                  <p>Specialized Program</p>
                  <h1>Web 3.0 (Blockchain) and Metaverse Specialization</h1>
                </div>
              </div>
              <div className='flex justify-evenly pt-8 pb-8'>
                <Image src={rightIcon} alt='hero' className='md:w-30 md:h10' />
                <div className='flex flex-col xxs:ml-4'>
                  <p>Specialized Program</p>
                  <h1>Web 3.0 (Blockchain) and Metaverse Specialization</h1>
                </div>
              </div>
              <div className='flex justify-evenly pt-8 pb-8'>
                <Image src={rightIcon} alt='hero' className='w-30 h10' />
                <div className='flex flex-col xxs:ml-4'>
                  <p>Specialized Program</p>
                  <h1>Web 3.0 (Blockchain) and Metaverse Specialization</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
