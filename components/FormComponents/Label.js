import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: 24px;
  font-weight: 300;
  margin: 10px 0;
  color: var(--secondary);
  ${props =>
    props.isRequired &&
    css`
      &:after {
        content: ' *';
        font-weight: normal;
        color: var(--orange);
      }
    `}
`;

export default Label;
