import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: 24px;
  margin: 10px 0;
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
