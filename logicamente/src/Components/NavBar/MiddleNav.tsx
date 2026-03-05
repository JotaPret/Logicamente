'use client';
import Link from "next/link";
import Image from "next/image";


export default function MiddleNav() {
    return (
        <div className='w-full bg-[var(--prim)] border-b border-gray-300 relative'>
            <div className='flex items-center justify-between py-3 px-[8%] lg:px-[16%]'>
                {/* Logo */}
                <Link href="/" className='text-4xl lg:text-5xl font-bold Audiowide text-black'>
                    Logica<span className='text-[var(--second)]'>mente</span>
                </Link>
            </div>
        </div>
    )
}
