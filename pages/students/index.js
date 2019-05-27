import React, { useState } from 'react';
import PageBody from '../components/MenuComponents/PageBody';
import Tabs from './Tabs';
import Organisasjonen from './organisasjonen';

const Students = () => {
  return (
    <PageBody title="for studenter">
      <Tabs/>
      <Organisasjonen/>
    </PageBody>
  );
};

export default Students;