import React from 'react';
import Link from 'next/link';
const Leftsidebar = ({ categories , activeid }) => {
    return (
        <div>
              <h1 className='font-bold text-lg'>All categories</h1>
      <ul clasName='flex flex-col gap-3 mt-6 '>
        {categories?.map((category) => (
          
          <li     key={category.catagory_id} className={` ${activeid === category.category_id && 'bg-slate-200'}  rounded-md font-bold text-center text-lg mt-3 `}> <Link href={`/category/${category.category_id}` } className='p-2 block'>{category.category_name}</Link>
          </li>
        ))}
      </ul>
        </div>
    );
};

export default Leftsidebar;