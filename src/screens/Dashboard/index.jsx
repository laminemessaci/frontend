import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { AverageSessionsChart } from '../../components/AverageSessions';
import DailyActivity from '../../components/DailyActivity';
import { Header } from '../../components/Header';
import Macros from '../../components/Macros';
import RadarActivities from '../../components/RadarActivities/index.jsx';
import Score from '../../components/ScoreUser';
import UserMessage from '../../components/UserMessage/index.js';
import VerticalNavBar from '../../components/VerticalNavBar';
import { user_message } from '../../constants/index.js';
import { Activity } from '../../model/Activity.js';
import Average from '../../model/Average.js';
import Perf from '../../model/Perf.js';
import Session from '../../model/Session.js';
import User from '../../model/User.js';
import {
  getAllDataMocked,
  getAllDatasMocked,
  getDataByUserId,
} from '../../services/mockedAPI/index.js';
import { useParams } from 'react-router';
import {
  ChartsGrid,
  ContentGrid,
  DashboardContainer,
  FirstName,
  MainChart,
  MainContent,
  Message,
  Title,
} from './index.style.js';
const initialState = {
  isLoading: true,
  error: null,
  isDataLoaded: false,
  data: null,
};

function Dashboard() {
  const [state, setState] = useState(initialState);

  const { userId } = useParams();

  const { isLoading, isDataLoaded, data } = state;

  console.log('state: ', data);

  async function getMockedData() {
    try {
      const userData = await getAllDataMocked();

      setState({
        ...state,
        data: userData,
        isDataLoaded: true,
        error: '',
        isLoading: false,
      });
    } catch (error) {
      setState({ ...state, error, isLoading: false });
    }
  }

  useEffect(() => {
    getMockedData();
    // async function getMockeData() {
    //   try {
    //     const userDatas = await getAllDatasMocked();

    //     setState({
    //       ...state,
    //       data: userDatas,
    //       isDataLoaded: true,
    //       error: '',
    //       isLoading: false,
    //     });
    //   } catch (error) {
    //     setState({ ...state, error, isLoading: false });
    //   }
    // }
    // getMockeData();
    setState({ ...state, isLoading: false });
    console.log('state: ', state);
  }, []);

  if (isLoading) {
    return (
      <>
        <ReactLoading
          type={'spinningBubbles'}
          color={'#ff6060'}
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
            <UserMessage message={user_message} isLoading={isLoading} />
            <ContentGrid>
              <ChartsGrid>
                <MainChart>
                  <DailyActivity userId={userId} data={data} />
                </MainChart>
                {/* <AverageSessionsChart
                  userId={userId}
                  data={data?.average?.sessions}
                /> */}

                {/* <RadarActivities userId={userId} perf={data?.perf} /> */}
                {/* <Score todayScore={data?.user?.todayScore} /> */}
              </ChartsGrid>
              <Macros userId={userId} data={data.userMainData} />
            </ContentGrid>
          </MainContent>
        </DashboardContainer>
      </>
    );
  }
}

export default Dashboard;
