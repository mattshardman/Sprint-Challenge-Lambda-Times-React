import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoginWrapper = styled.div`
    z-index: 100;
    position: fixed;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.8);
`

const LoginBox = styled.div`
    height: 250px;
    width: 400px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    box-shadow: 0 3px 35px rgba(0,0,0,0.5);
`;

const Header = styled.h1`
    font-size: 30px;
    margin: 0;
`;

const Input = styled.input`
    width: 80%;
    height: 40px;
    background: #fafafa;
    border: 1px solid #ddd;
    outline: none;
    padding: 0 10px;
    transition: border 420ms;
    :focus {
        border: 1px solid #000;
    }
`;

const Button = styled.button`
    margin-top: 30px;
    width: 80%;
    border-radius: 3px;
    height: 40px;
    background: #3b5998;
    color: #fff;
    font-size: 14px;
    border: none;
    cursor: pointer;
    :hover {
        background: #8b9dc3;
    }
`

const LoginModal = ({ loggedIn }) => {

    return (
        <LoginWrapper>
            <LoginBox>
                <Header>Lambda Times Login</Header>

                <Button onClick={loggedIn}>Log In With FaceBook</Button>
            </LoginBox>
        </LoginWrapper>
    )
}

LoginModal.propTypes = {
    loggedIn: PropTypes.func.isRequired,
}

export default LoginModal;