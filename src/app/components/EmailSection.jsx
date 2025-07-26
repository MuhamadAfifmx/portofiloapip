'use client';
import React from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import InstagramIcon from '../../../public/instagram-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section
      id='contact'
      className='relative grid md:grid-cols-2 gap-8 py-24 my-12 px-4 md:px-12'
    >
      {/* Background Glow */}
      <div className='absolute top-2/3 left-0 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-lg z-0'></div>

      {/* Left Side - Social Info */}
      <div className='z-10'>
        <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
          Let’s Connect
        </h2>
        <p className='text-[#ADB7BE] mb-6 max-w-md leading-relaxed'>
          I’m currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out to me via WhatsApp or through my social media below.
        </p>
        <div className='flex flex-row gap-4'>
          <Link href='https://github.com/MuhamadAfifmx' target='_blank'>
            <Image src={GithubIcon} alt='GitHub' width={32} height={32} />
          </Link>
          <Link href='https://www.instagram.com/mhmdafiffsptra' target='_blank'>
            <Image src={InstagramIcon} alt='Instagram' width={32} height={32} />
          </Link>
        </div>
      </div>

      {/* Right Side - WhatsApp Contact */}
      <div className='z-10 flex flex-col justify-center'>
        <p className='text-[#ADB7BE] text-base mb-4'>
          Prefer to chat directly? Reach out to me on WhatsApp!
        </p>
        <a
          href='https://wa.me/6285774407831'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200'
        >
          Chat via WhatsApp
        </a>
        <span className='text-[#ADB7BE] text-sm mt-2'>
          Phone: +62 857-7440-7831
        </span>
      </div>
    </section>
  );
};

export default EmailSection;
