// @ts-nocheck
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Switch from 'react-switch';

import { getAllDataMocked } from '../../services/mockedAPI/index.js';

import { Header } from '../../components/Header/index.jsx';
import UserProfile from '../../components/UserProfile/index.js';
import VerticalNavBar from '../../components/VerticalNavBar/index.jsx';
import { theme } from '../../constants/index.js';

import {
  ApiText,
  DashboardContainer,
  LabelContainer,
  MainContent,
} from './index.style.js';
import Loader from '../../components/Loader/index.js';

const initialState = {
  isLoading: true,
  error: null,
  data: null,
  checked: false,
};
function Home() {
  const [state, setState] = useState(initialState);
  const handleChange = (checked) => {
    setState({ checked });
  };

  const { isLoading, data, checked } = state;

  useEffect(() => {
    async function getMockedData() {
      try {
        const userData = await getAllDataMocked();

        setState({
          ...state,
          data: userData,

          error: '',
          isLoading: false,
        });
      } catch (error) {
        setState({ ...state, error, isLoading: false });
      }
    }
    getMockedData();
  }, [checked]);

  if (isLoading) {
    return (
      <>
        <Loader
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
          <LabelContainer>
            <label>
              <ApiText>Api</ApiText>
              <Switch
                checked={state.checked}
                onChange={handleChange}
                onColor={theme.colors.primary500}
              />
            </label>
          </LabelContainer>
          {data?.userMainData.map((user) => (
            <UserProfile
              key={user.userId}
              userId={user.userId}
              imageSource={`/images/${user.userInfos.firstName}.jpg`}
              api={checked}
              data={user}
            />
          ))}
        </MainContent>
      </DashboardContainer>
    </>
  );
}

export default Home;
