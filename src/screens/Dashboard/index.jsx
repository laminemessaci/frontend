import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { AverageSessionsChart } from "../../components/AverageSessions";
import DailyActivity from "../../components/DailyActivity";
import { Header } from "../../components/Header";
import Macros from "../../components/Macros";
import RadarActivities from "../../components/RadarActivities/index.jsx";
import Score from "../../components/Score";
import VerticalNavBar from "../../components/VerticalNavBar";
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

      // const user = new User(userDatas.user.data);
      console.log("userData: ", userDatas.perf);

      // const perf = new Activity(12, userDatas?.perf).getActivitiesById();

      // console.log("perf==>", perfor);
      // const average = new Average(userDatas.average);
      // const session = new Session(userDatas.session);

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
                <AverageSessionsChart sessions={data?.average?.sessions} />
                <RadarActivities userId={"18"} perf={data.perf} />
                <Score userId={"12"} />
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
