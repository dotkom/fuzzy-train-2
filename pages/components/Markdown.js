import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
const StyledMarkdown = styled.div`
  max-width: 60%;
  width: 100%;
  font-size: 14px;
  color: ${props => props.theme.secondary};
  & > * + * {
    margin: 15px 0;
  }

  p {
  }

  strong,
  th {
    font-weight: bold;
  }

  em,
  blockquote {
    font-style: italic;
  }

  code,
  pre {
    font-family: monospace;
  }

  pre {
    white-space: pre;
  }

  blockquote,
  pre > code {
    margin-left: 20px;
    margin-right: 20px;
    padding: 10px;
    background: white;
  }

  td,
  th {
    padding: 10px;
    border: 1px solid;
  }

  ul {
    list-style-type: disc;
    padding-left: 30px;
  }

  ol {
    list-style-type: decimal;
    padding-left: 30px;
  }

  h1 {
    color: #faa21b;
    font-size: 24px;
    border-bottom: 2px solid #c4c4c4;
  }

  h2 {
    font-size: 21px;
  }

  h3 {
    font-size: 19px;
  }

  h5 {
    font-size: 13px;
  }

  h6 {
    font-size: 10px;
  }
`;

const Markdown = ({ source }) => {
  return (
    <StyledMarkdown>
      <ReactMarkdown source={source} />
    </StyledMarkdown>
  );
};

export default Markdown;
