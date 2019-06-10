import React, { useState } from 'react';
import PageBody from 'components/MenuComponents/PageBody';
import Tabs from './Tabs';
import AboutUs from './organisasjonen';

const Students = () => {
  return (
    <PageBody title="for studenter">
      <Tabs/>
      <AboutUs/>
    </PageBody>
  );
};

export default Students;