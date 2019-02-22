import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  span {
    cursor: pointer;
    margin-right: 5%;
  }
  span:last-child {
    margin-right: 0;
  }
  span:hover {
    text-decoration: underline;
  }
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  span {
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
  background: red;
  margin-right: 25px;
  display: flex;
`;

const AvatarImg = styled.img`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TopBar = ({ user, isLoggedIn, logIn, logOut }) => {
  return (
    <TopBarWrapper>
      <Container>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          {!!isLoggedIn && 
          <Avatar>
            <AvatarImg src={user.photo} alt="user"/>
          </Avatar>
          }
          <span onClick={logOut}>{isLoggedIn ? 'LOG OUT' : 'LOG IN'}</span>
        </ContainerRight>
      </Container>
    </TopBarWrapper>
  )
}

TopBar.propTypes = {
  user: PropTypes.shape({ name: PropTypes.string, photo: PropTypes.string }).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
}

export default TopBar;