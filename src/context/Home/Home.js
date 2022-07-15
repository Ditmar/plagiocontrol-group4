import React from 'react';
import { Sidebar } from '../../ui/components/SidebarM/Sidebar';

import { Cards } from '../../ui/components/cards/Cards';
export const Home = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Cards />
      </div>
    </>
  );
};
