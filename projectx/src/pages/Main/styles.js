import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'red' : 'blue')}
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 12px;
    color: red;
  }
`;
