import styled from 'styled-components';

export const MainContainer = styled.main`
  text-align: center;
`;

export const StatusCode = styled.p`
  margin: 8rem 0 4rem 0;
  font-size: 18rem;
  font-weight: 700;
  @media screen and (max-width: 55.5rem) {
    margin: 8rem 0 1rem 0;
    font-size: 6rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 3rem;
`;
