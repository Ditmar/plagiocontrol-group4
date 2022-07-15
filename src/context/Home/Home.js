import React from 'react'; 
import {RecentDocuments} from '../../ui/components/LastDocuments/RecentDocuments'; 
export const Home = () => { 
    return <div> 
        <RecentDocuments/> 
    </div> 
}

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
