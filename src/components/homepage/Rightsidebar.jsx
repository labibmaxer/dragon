import React from 'react';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Rightsidebar = () => {
    return (
        <div className="mx-1">
            <h1 className='font-bold text-lg mb-3'>Login with</h1>
            <div className='flex flex-col gap-2'> 
            <button className='btn border-blue-500 text-blue-500'>
             <FaGoogle />
 Login with google  </button>
                <button className='btn'><FaGithub />
Login with github</button>
</div>
        </div>
    );
};

export default Rightsidebar;