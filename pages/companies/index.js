import React from 'react';
import Tabs from './Tabs';
import Info from './info';
import PageBody from 'components/MenuComponents/PageBody';

//Temporary file for å teste routing
const Companies = () => {
  return (
    <PageBody title="for bedrifter">
      <Tabs />
      <Info />
    </PageBody>
  );
};

export default Companies;
