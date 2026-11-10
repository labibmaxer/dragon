import BreakinNews from '@/components/shared/BreakinNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
              <Header></Header>
              <BreakinNews></BreakinNews>
        <Navbar></Navbar>
        {children}
        </div>
    );
};

export default MainLayout;