// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { Header } from '../../components/Header/index.jsx';
import UserProfile from '../../components/UserProfile/index.js';
import VerticalNavBar from '../../components/VerticalNavBar/index.jsx';
import { theme } from '../../constants/index.js';
import { DashboardContainer, MainContent } from './index.style.js';
import { ReactLoading } from 'react-loading';
import { getAllDataMocked } from '../../services/mockedAPI/index.js';

function Home() {
  const [state, setState] = useState({ checked: false });
  const handleChange = (checked) => {
    setState({ checked });
  };

  const { isLoading, isDataLoaded, data } = state;

  console.log('userData: ', data);

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

  return (
    <>
      <Header />
      <DashboardContainer>
        <VerticalNavBar />
        <MainContent>
          <label>
            <strong>Api</strong>
            <Switch
              checked={state.checked}
              onChange={handleChange}
              onColor={theme.colors.primary500}
            />
          </label>
          {data?.userMainData.map((user) => (
            <UserProfile
              key={user.userId}
              userId={user.userId}
              imageSource={`/images/${user.userInfos.firstName}.jpg`}
            />
          ))}
        </MainContent>
      </DashboardContainer>
    </>
  );
}

export default Home;
