import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import LoginModal from './components/LogInModal';
import withLogin from './withLogin';

const App = ({ isLoggedIn, logIn, logOut }) => {
  return (
    <div className="App">
      { !isLoggedIn && <LoginModal logIn={logIn} /> }
      <TopBar 
        isLoggedIn={isLoggedIn} 
        logOut={logOut} 
      />
      <Header />
      <Content />
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
}

export default withLogin(App);
