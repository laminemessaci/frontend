import styled from 'styled-components';

export const MacroContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 2rem;
  > * {
    border-radius: 0.25rem;
    overflow: hidden;
  }
  @media (max-width: 1340px) {
    gap: 1.25rem;
  }
  @media (max-width: 968px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
  }
  @media (max-width: 788px) {
  }
`;
