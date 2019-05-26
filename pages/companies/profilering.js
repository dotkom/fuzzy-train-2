import React from 'react';
import Markdown from '../components/Markdown';
import PageBody from '../components/MenuComponents/PageBody';
import Tabs from './Tabs';

const InfoboxSource = `
  # Profilering
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

const Profilering = () => {
  return (
    <PageBody title="for bedrifter">
      <Tabs  />
      <Markdown source={InfoboxSource} />
    </PageBody>
  );
};

export default Profilering;