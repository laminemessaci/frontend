// @ts-nocheck
import React, { useState } from 'react';
import Switch from 'react-switch';
import { Header } from '../../components/Header/index.jsx';
import UserProfile from '../../components/UserProfile/index.js';
import VerticalNavBar from '../../components/VerticalNavBar/index.jsx';
import { theme } from '../../constants/index.js';
import { DashboardContainer, MainContent } from './index.style.js';

function Home() {
  const [state, setState] = useState({ checked: false });
  const handleChange = (checked) => {
    setState({ checked });
  };
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
          <UserProfile />
          <UserProfile />
        </MainContent>
      </DashboardContainer>
    </>
  );
}

export default Home;
