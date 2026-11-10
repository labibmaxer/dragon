import React from 'react';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-2" >
      <Image src={Logo} alt="Logo" width={300} height={200} />          
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        {/* <h1>This is a header</h1> */}
        </div>
    );
};

export default Header;