import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
const StyledMarkdown = styled.div`
  width: 100%;
  font-size: 14px;
  color: var(--secondary);

  & > * + * {
    margin: 15px 0;
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
    font-size: 32px;
    padding-bottom: 5px;
    border-bottom: 2px solid var(--grey);
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
