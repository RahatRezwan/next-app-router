import Sidebar from '@/components/shared/Sidebar/Sidebar';
import React from 'react';

export const metadata = {
   title: 'Dashboard',
   description: 'Dashboard Layout',
};

const DashboardLayout = ({ children }) => {
   return (
      <div className='flex'>
         <Sidebar />
         <div className='w-full bg-gray-300'>{children}</div>
      </div>
   );
};

export default DashboardLayout;
