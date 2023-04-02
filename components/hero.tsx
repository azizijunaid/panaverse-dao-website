import React from 'react';
import Image from 'next/image';
import heroImg from '@/assets/hero_Poster.png';
import { Wrapper } from './shared/wrapper';

export default function Hero() {
  return (
    <Wrapper>
      <section className='hero'>
        <div className='md:container sm:container xxs:container mx-auto'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='mt-20 flex-1'>
              <p className='mb-5'>
                Presidential Initiative for Artificial Intelligence and
                Computing (PIAIC)
              </p>
              <h1 className='md:text-6xl lg:text-6xl font-semibold mb-5 leading-relaxed xxs:leading-normal xxs:text-3xl'>
                Certified Web 3.0 and Metaverse Developer
              </h1>

              <p className='mb-5 leading-relaxed' style={{ color: '#4A5B5C' }}>
                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                Getting Ready for the Next Generation of the Internet
              </p>
              <p className='mb-5 leading-relaxed' style={{ color: '#4A5B5C' }}>
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </p>
              <button
                style={{ backgroundColor: '#00616C', color: 'white' }}
                className='hover:bg-sky-700 rounded-full p-3 w-50'
              >
                Learn More
              </button>
            </div>
            <div className='flex-1'>
              <Image src={heroImg} width={800} height={300} alt='hero' />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
