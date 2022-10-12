import React from "react";
import { AverageSessionsChart } from "../../components/AverageSessions";
import DailyActivity from "../../components/DailyActivity";
import { Header } from "../../components/Header";
import Macros from "../../components/Macros";
import RadarActivities from "../../components/Radar/index.jsx";
import Score from "../../components/Score";
import VerticalNavBar from "../../components/VerticalNavBar";
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
  // const theme = useTheme();
  // console.log(theme);
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
              <AverageSessionsChart userId={"12"} />
              <RadarActivities userId="12" />
              <Score userId={"12"} />
            </ChartsGrid>
            <Macros userId="12" />
          </ContentGrid>
        </MainContent>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
