import styled from "styled-components";
import { theme } from "../../constants/index.js";

const VerticalBarContainer = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;
  color: white;
  background: ${theme.colors.neutral900};

  @media (max-width: 1340px) {
    max-height: 692px;
  }
`;

const Activities = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const ActivityIcon = styled.img`
  padding: 0.5rem;
  &:hover {
    box-shadow: 0 0 25px #ccc;
  }
`;

const Copyright = styled.p`
  display: flex;
  align-items: center;
  padding: 3rem 0;
  font-size: ${theme.fonts.medium};
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  &:hover {
    box-shadow: 0 0 8px #ccc;
  }
  @media (max-width: 1340px) {
    padding: 2rem;
  }
`;

export { VerticalBarContainer, Activities, ActivityIcon, Copyright };
