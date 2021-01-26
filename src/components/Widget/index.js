import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }
  input {
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.contrastText};
    padding: 10px 16px;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: inherit;
    margin-top: 26px;
  }
  button {
    display: block;
    width: 100%;
    padding: 10px 16px;
    margin-top: 20px;
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;

    &:disabled {
      background-color: #979797;
      cursor: not-allowed
    }
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
