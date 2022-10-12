import styled from "styled-components";
import { theme } from "../../constants/index.js";

export const DashboardContainer = styled.main`
  display: grid;
  grid-template-columns: 7.5rem 1fr;
`;

export const MainContent = styled.section`
  padding: 3rem 5rem;

  @media (max-width: 1340px) {
    padding: 1.5rem 2rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    font-size: 2.5rem;
  }
`;

export const FirstName = styled.span`
  color: ${theme.colors.primary500};
`;

export const Message = styled.p`
  margin: 2rem 0 4rem 0;
  font-size: 1.1rem;
  @media (max-width: 1340px) {
    margin: 0.5rem 0 2rem 0;
    font-size: 1.05rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1340px) {
    gap: 1rem;
  }
`;

export const ChartsGrid = styled.div`
  grid-column: 1/4;

  display: grid;
  grid-template: 20rem 16rem / repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1340px) {
    grid-template: 18rem 14rem / repeat(3, 1fr);
    gap: 1rem;
  }

  > * {
    border-radius: 0.25rem;
    overflow: hidden;
  }
`;

export const MainChart = styled.div`
  grid-column: 1/4;
`;
