import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { AverageSessionsChart } from "../../components/AverageSessions";
import DailyActivity from "../../components/DailyActivity";
import { Header } from "../../components/Header";
import Macros from "../../components/Macros";
import RadarActivities from "../../components/RadarActivities/index.jsx";
import Score from "../../components/ScoreUser";
import UserMessage from "../../components/UserMessage/index.js";
import VerticalNavBar from "../../components/VerticalNavBar";
import { user_message } from "../../constants/index.js";
import { Activity } from "../../model/Activity.js";
import Average from "../../model/Average.js";
import Perf from "../../model/Perf.js";
import Session from "../../model/Session.js";
import User from "../../model/User.js";
import { getAllDatasMocked } from "../../services/mockedAPI/index.js";
import { findPath } from "../../utils/index.js";
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
const initialState = {
  isLoading: true,
  error: null,
  isDataLoaded: false,
  data: null,
  perf: null,
};

function Dashboard() {
  const [state, setState] = useState(initialState);

  async function getMockeData() {
    try {
      const userDatas = await getAllDatasMocked();

      setState({
        ...state,
        data: userDatas,
        isDataLoaded: true,
        error: "",
        isLoading: false,
      });
    } catch (error) {
      setState({ ...state, error, isLoading: false });
    }
  }

  const { isLoading, isDataLoaded, data } = state;

  console.log("state: ", state);

  useEffect(() => {
    getMockeData();
    setState({ ...state, isLoading: false });
    console.log("state: ", state);
  }, []);

  if (isLoading) {
    return (
      <>
        <ReactLoading
          type={"spinningBubbles"}
          color={"#ff6060"}
          width={200}
          height={200}
        />
      </>
    );
  }
  if (isDataLoaded) {
    return (
      <>
        <Header />
        <DashboardContainer>
          <VerticalNavBar />
          <MainContent>
            <UserMessage message={user_message} />
            <ContentGrid>
              <ChartsGrid>
                <MainChart>
                  <DailyActivity userId={"12"} />
                </MainChart>
                <AverageSessionsChart sessions={data?.average?.sessions} />
                <RadarActivities userId={"18"} perf={data?.perf} />
                <Score todayScore={data?.user?.todayScore} />
              </ChartsGrid>
              <Macros userId="12" />
            </ContentGrid>
          </MainContent>
        </DashboardContainer>
      </>
    );
  }
}

export default Dashboard;
