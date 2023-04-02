import React from 'react';
import Image from 'next/image';
import financialGirl from '@/assets/footer_girl.png';
import polygon from '@/assets/polygon.png';
import { Wrapper } from './shared/wrapper';

export default function footer() {
  return (
    <Wrapper>
      <section className='footer-part md:container sm:container xxs:container mx-auto'>
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1'>
            <Image src={financialGirl} alt='' />
          </div>
          <div className='flex-1'>
            <h1 className='leading-1 md:text-6xl mb-8 xxs:text-2xl xxs:mt-10'>
              The Outcome for Participants of the Program
            </h1>
            <p className='mb-5 text-[#4A5B5C]'>
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan software exports.
            </p>

            <div className='flex justify-between flex-col md:flex-row'>
              <div>
                <div className='flex flex-start items-center mb-8 w-60'>
                  <Image src={polygon} alt='' />
                  <h1 className='ml-10'>Product Ownership</h1>
                </div>
                <div className='flex flex-start items-center mb-8 w-60'>
                  <Image src={polygon} alt='' />
                  <h1 className='ml-10'>Freelancing</h1>
                </div>
              </div>
              <div>
                <div className='flex flex-start items-center mb-8 w-60'>
                  <Image src={polygon} alt='' />
                  <h1 className='ml-10'>Global Marketing By DAO</h1>
                </div>
                <div className='flex flex-start items-center mb-8 w-60'>
                  <Image src={polygon} alt='' />
                  <h1 className='ml-10'>Boosting Economy</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
