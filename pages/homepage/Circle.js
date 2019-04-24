import React, {useState} from 'react';
import styled from 'styled-components'


const Circle = ({className}) => {
  const [colorscheme, switchColorscheme] = useState("white");

  return ( 
    <svg className={className} width="217" height="245" viewBox="0 0 217 245" fill="none" xmlns="http://www.w3.org/2000/svg">
     <circle cx="126" cy="91" r="91" fill={colorscheme} 
     onClick={() => colorscheme == "white" ? switchColorscheme("#07244C") : switchColorscheme("white")}
     />
     <circle cx="63" cy="182" r="63" fill="#DC942D"/>
    </svg>
  );
};

export default Circle;