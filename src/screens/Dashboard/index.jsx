import React from "react";
import { Header } from "../../components/Header/index.jsx";
import IconComponent from "../../components/IconComponent/index.jsx";
import Macros from "../../components/Macros/index.jsx";
import VerticalNavBar from "../../components/VerticalNavBar/index.jsx";
import {
  DashboardContainer,
  FirstName,
  MainContent,
  Message,
  Title,
} from "./index.style.js";

function Dashboard() {
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
          <Macros userId="1123" />
        </MainContent>
      </DashboardContainer>
    </>
  );
}



export default Dashboard;
