import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: 24px;
  margin: 10px 0;
  color: var(--secondary);
  ${props =>
    props.isRequired &&
    css`
      &:after {
        content: ' *';
        color: var(--orange);
      }
    `}
`;

export default Label;
