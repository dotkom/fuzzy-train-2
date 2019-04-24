import React from 'react';

const Circle = ({switchTheme}) => {
  return ( 
    <svg width="217" height="245" viewBox="0 0 217 245" fill="none" xmlns="http://www.w3.org/2000/svg">
     <circle cx="126" cy="91" r="91" fill="white" onclick={switchTheme}/>
     <circle cx="63" cy="182" r="63" fill="#DC942D"/>
    </svg>
  );
};

export default Circle;