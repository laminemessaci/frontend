// @ts-nocheck
import React, { useState } from 'react';
import Switch from 'react-switch';
import { Header } from '../../components/Header/index.jsx';
import UserProfile from '../../components/UserProfile/index.js';
import VerticalNavBar from '../../components/VerticalNavBar/index.jsx';
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
            <span>Api</span>
            <Switch checked={state.checked} onChange={handleChange} />
          </label>
          <UserProfile />
          <UserProfile />
        </MainContent>
      </DashboardContainer>
    </>
  );
}

export default Home;
