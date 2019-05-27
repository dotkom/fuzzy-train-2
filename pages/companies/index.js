import React, { useState } from 'react';
import Tabs from './Tabs';
import GenerellInfo from './info';
import PageBody from 'components/MenuComponents/PageBody';

//Temporary file for å teste routing
const Bedrifter = () => {
  return (
    <PageBody title="for bedrifter">
      <Tabs />
      <GenerellInfo />
    </PageBody>
  );
};

export default Bedrifter;
