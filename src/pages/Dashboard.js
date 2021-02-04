import React from 'react';
import { useSelector } from "react-redux"
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';

const Dashboard = () => {
  const loading = useSelector(state => state.mocks.loading)
  if (loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="loading" className="loading-img"/>
      </main>
    )
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
