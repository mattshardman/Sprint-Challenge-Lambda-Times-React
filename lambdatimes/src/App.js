import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import LoginModal from './components/LogInModal';
import withLogin from './withLogin';

const App = ({ user, isLoggedIn, loggedIn, logOut }) => {
  console.log(user)
  return (
    <div className="App">
      { !isLoggedIn && <LoginModal loggedIn={loggedIn} /> }
      <TopBar 
        user={user}
        isLoggedIn={isLoggedIn} 
        logOut={logOut} 
      />
      <Header />
      { !!isLoggedIn &&  <Content /> }
     
    </div>
  );
}

App.propTypes = {
  user: PropTypes.shape(PropTypes.string).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  loggedIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
}

export default withLogin(App);
