import React from 'react';
import Menu from '../components/MenuComponents/Menu';


const Tabs = ({activeTab}) => {
  const tabs = [
    {
      text: 'Organisasjonen',
      link: '/students',
    },
    {
      text: 'Komiteer',
      link: '/students/komiteer',
    },
    {
      text: 'Andre verv',
      link: '/students/andreverv',
    },
    {
      text: 'Annet',
      link: '/students/annet',
    },
  ];

  return (
    <>
      <Menu tabs={tabs} activeTab={activeTab} underline/>
    </>
  );
};

export default Tabs;
