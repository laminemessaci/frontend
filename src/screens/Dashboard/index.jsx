import React from "react";
import { Header } from "../../components/Header/index.jsx";
import IconComponent from "../../components/IconComponent/index.jsx";
import Macros from "../../components/Macros/index.jsx";
import VerticalNavBar from "../../components/VerticalNavBar/index.jsx";

function Dashboard() {
  return (
    <>
      <Header />
      <Macros userId="12" />
      <VerticalNavBar />
    </>
  );
}

export default Dashboard;
