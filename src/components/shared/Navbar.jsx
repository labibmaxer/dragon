import React from 'react';
import Link from 'next/link';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between gap-4 mt-6'>
            <div></div>
  <ul className='flex justify-between items-center text-gray-700  gap-4'>
    <li><NavLink href={'/'}>Home</NavLink></li>
       <li><NavLink href={'/about'}>About</NavLink></li>
    <li><NavLink href={'/career'}>Career</NavLink></li>

  </ul>
  <div className='flex items-center gap-2'>

    <Image src={userAvatar} alt='' width={60} height={60} ></Image>
         <button className='btn bg-purple-500 text-white'>
            <Link href={"/login"}>Login</Link>
        </button>
  </div>

         </div>
    );
};

export default Navbar;