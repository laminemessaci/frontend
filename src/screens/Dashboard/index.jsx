import React from "react";
import { useTheme } from "styled-components";
import DailyActivity, {
  DailyActivityChart,
} from "../../components/DailyActivity/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import Macros from "../../components/Macros/index.jsx";
import VerticalNavBar from "../../components/VerticalNavBar/index.jsx";
import {
  ChartsGrid,
  ContentGrid,
  DashboardContainer,
  FirstName,
  MainChart,
  MainContent,
  Message,
  Title,
} from "./index.style.js";

function Dashboard() {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Header />
      <DashboardContainer>
        <VerticalNavBar />
        <MainContent>
          <Title>
            Bonjour <FirstName>Lamine</FirstName>
          </Title>
          <Message>
            <span>
              Félicitations ! Vous avez explosé vos objectifs hier !&nbsp;👏
            </span>
          </Message>

          <ContentGrid>
            <ChartsGrid>
              <MainChart>
                <DailyActivity userId={"12"} />
              </MainChart>
            </ChartsGrid>
            <Macros userId="12" />
          </ContentGrid>
        </MainContent>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
