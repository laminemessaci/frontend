// @ts-nocheck
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
import { getAllDataMocked } from '../../services/mockedAPI/index.js';
import { useNavigate, useParams } from 'react-router';
import {
  ChartsGrid,
  ContentGrid,
  DashboardContainer,
  MainChart,
  MainContent,
} from './index.style.js';

const initialState = {
  isLoading: true,
  error: null,
  isDataLoaded: false,
  data: null,
};

/**
 * @file User Dashboard page
 */

function Dashboard() {
  const [state, setState] = useState(initialState);

  const { userId } = useParams();
  const navigate = useNavigate();
  if (!['12', '18'].includes(userId)) {
    navigate('/Page404');
  }

  const { isLoading, isDataLoaded, data } = state;

  // console.log('state: ', data);

  useEffect(() => {
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
    getMockedData();
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
            <UserMessage
              userId={userId}
              message={user_message}
              isLoading={isLoading}
            />
            <ContentGrid>
              <ChartsGrid>
                <MainChart>
                  <DailyActivity userId={userId} data={data} />
                </MainChart>
                <AverageSessionsChart userId={userId} data={data} />
                <RadarActivities userId={userId} data={data} />
                <Score userId={userId} data={data} />
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
