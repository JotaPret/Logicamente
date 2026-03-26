'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Loja', href: '/' },
  { label: 'Blog', href: '/' },
  {
    label: 'Produtos',
    href: '/',
    dropdown: [
      { label: 'Roupas', href: '/roupas' },
      { label: 'Acessórios', href: '/acessorios' },
    ],
  },
  { label: 'Fale Conosco', href: '/' },
];

export default function BottomNav() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full bg-white py-6 shadow-sm transition-all duration-500 ${isFixed ? 'fixed-nav fixed left-0 top-0 z-50' : ''
        }`}
    >
      <div className='flex w-full items-center justify-between px-[8%] text-gray-700 lg:px-[16%]'>
        {/* Logo mobile */}
        <Link href='/' className='Audiowide text-3xl font-bold lg:hidden'>
          Mari<span className='text-[--second]'>Chique</span>
        </Link>

        {/* Menu */}
        <nav className='hidden space-x-6 lg:flex'>
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className='group relative'>
                <Link
                  href={link.href}
                  className='GolosText flex items-center gap-1 font-bold text-[--black] transition-colors hover:text-[--second]'
                >
                  {link.label}

                  {/* <Image
                    src='/Menu-dot.svg'
                    alt='menu icon'
                    width={10}
                    height={10}
                  /> */}
                </Link>

                {/* Dropdown */}
                <div className='absolute left-0 top-full hidden min-w-[170px] rounded-lg border border-gray-100 bg-white p-2 shadow-xl group-hover:block'>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className='font-golos block roudend -md px-4 py-2 text-[var(--black)] transition-colors hover:bg-[--prim-light] hover:text-[--second]'
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className='GolosText flex items-center gap-1 font-bold text-[--black] transition-colors hover:text-[--second]'
              >
                {link.label}

                {/* <Image
                  src='/Menu-dot.svg'
                  alt='menu icon'
                  width={10}
                  height={10}
                /> */}
              </Link>
            ),
          )}
        </nav>
      </div>
      </div>
  );
}
