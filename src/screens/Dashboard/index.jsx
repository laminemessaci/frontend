import React from "react";
import { Header } from "../../components/Header/index.jsx";
import IconComponent from "../../components/IconComponent/index.jsx";
import Macros from "../../components/Macros/index.jsx";
import VerticalNavBar from "../../components/VerticalNavBar/index.jsx";
import { DashboardContainer } from "./index.style.js";

function Dashboard() {
  return (
    <>
      <Header />
      <DashboardContainer>
        <VerticalNavBar />
        <Macros userId="12" />
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
