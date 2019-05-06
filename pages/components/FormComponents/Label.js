import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: 36px;
  color: ${props => props.theme.secondary};
  ${props =>
    props.isRequired &&
    css`
      &:after {
        content: ' *';
        color: ${props => props.theme.orange};
      }
    `}
`;

export default Label;
