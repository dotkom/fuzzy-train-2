import React from 'react';
import styled from 'styled-components';

import Menu1 from '../components/studentpageComponents/Menu1';
import ThemeSwitcherStudent from '../components/studentpageComponents/ThemeSwitchersStudent';

const Studentpage = () => {
  return (
    <>
      <ThemeSwitcherStudent />
      <Menu1 />
    </>
  );
};

export default Studentpage;
