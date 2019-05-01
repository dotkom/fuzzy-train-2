import React from 'react';
import styled from 'styled-components';

import MenuTab from '../homepageComponents/MenuTab';

const Menu1Container = ({ className }) => {
  return (
    <div className={className}>
      <Wrapper>
        <MenuTab text="Organisasjonen" link="/" isActive />
        <MenuTab text="Komiteer" onClick={submenu} />
        <MenuTab text="Andre verv" link="/" />
        <MenuTab text="Annet" link="/" />
      </Wrapper>
    </div>
  );
};

function submenu() {}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
  width: 100%;
  align-items: auto;
  font-size: 12px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2rem;
    width: 15rem;
  }
`;

const Menu1 = styled(Menu1Container)`
  max-width: 70rem;
  max-width: 1200px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-bottom: 500px;

  @media only screen and (max-width: 768px) {
    padding: 0 25%;
    height: 25rem;
  }
`;
export default Menu1;
