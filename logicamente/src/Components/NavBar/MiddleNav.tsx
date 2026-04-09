'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function MiddleNav() {
  const [query, setQuery] = useState('');
  return (
    <div className='relative w-full border-b border-gray-300 bg-[--prim]'>
      <div className='flex items-center justify-between px-[8%] py-3 lg:px-[16%]'>
        {/* Logo */}
        <Link
          href='/'
          className='Audiowide text-4xl font-bold text-black lg:text-5xl'
        >
          Omni<span className='rolex-animate'>Rolex</span>
        </Link> 

        {/* Search Box */}
        <div className='relative mx-0 ms-6 flex flex-1 flex-col rounded-lg bg-white lg:max-w-2xl'>
          <div className='flex items-center'>
            <input
              type='text'
              placeholder='Busque por um produto ou marca'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='flex-1 rounded-l-lg px-4 py-4 outline-none'
            />
            <button className='cursor-pointer px-3 text-2xl'>
              <i className='bi bi-search'></i>
            </button>
          </div>
        </div>
        {/* Contact */}
        <div className='flex items-center gap-2'>
          <Image
            src='/suporte.png'
            alt='Descrição do contato'
            width={50}
            height={50}
          />
          <div className='flex flex-col'>
            <h2 className='GolosText ps-2 text-xs font-semibold'>SUPORTE</h2>
            <h1 className='GolosText font-semibold'>12 9999-5555</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
