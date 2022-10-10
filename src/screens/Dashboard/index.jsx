import React from "react";
import { Header } from "../../components/Header/index.jsx";
import IconComponent from "../../components/IconComponent/index.jsx";
import VerticalNavBar from "../../components/VerticalNavBar/index.jsx";

function Dashboard() {
  return (
    <>
      <Header />
      <VerticalNavBar />
      <IconComponent type="Calories" value={126} />
    </>
  );
}

export default Dashboard;
